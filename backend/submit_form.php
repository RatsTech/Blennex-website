<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set CORS headers
header("Access-Control-Allow-Origin: https://blennexdesign.com");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
    exit();
}

// Connect to database (Hostinger credentials)
$conn = new mysqli("localhost", " u478488433_blennex", "Blennex6758#", "u478488433_ blennex_design");
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed: ' . $conn->connect_error]);
    exit();
}

// Get JSON input
$data = json_decode(file_get_contents('php://input'), true);

// Sanitize and validate input
$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$company = trim($data['company'] ?? '');
$message = trim($data['message'] ?? '');
$services = $data['services'] ?? [];

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Missing required fields']);
    exit();
}

// Insert into contact_messages
$stmt = $conn->prepare("INSERT INTO contact_messages (name, email, company_name, message) VALUES (?, ?, ?, ?)");
if (!$stmt) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Failed to prepare contact insert']);
    exit();
}
$stmt->bind_param("ssss", $name, $email, $company, $message);
$stmt->execute();
$contact_id = $stmt->insert_id;
$stmt->close();

// Insert into services_selected if services are provided
if (!empty($services)) {
    $stmt = $conn->prepare("INSERT INTO services_selected (contact_id, service_name) VALUES (?, ?)");
    if (!$stmt) {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Failed to prepare services insert']);
        exit();
    }

    foreach ($services as $service) {
        $clean_service = trim($service);
        $stmt->bind_param("is", $contact_id, $clean_service);
        $stmt->execute();
    }
    $stmt->close();
}

// Return success response
http_response_code(200);
echo json_encode(['status' => 'success', 'message' => 'Form submitted successfully']);
$conn->close();
?>
