import React, { useState } from 'react';
import '../../Styles/contactForm.css';
import instagramIcon from '../../assets/images/Socail Icons/instagram.png'
import linkedinIcon from '../../assets/images/Socail Icons/linkedin.png'
import pinterestIcon from '../../assets/images/Socail Icons/pinterest.png'
import facebookIcon from '../../assets/images/Socail Icons/facebook.png'


function ContactForm({navbar}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [services, setServices] = useState([]);

  const serviceOptions = [
    "Logo Design",
    "Branding",
    "Packaging & Box Design",
    "Box design",
    "Label design",
    "3D Mockups",
    "Others"
  ];

  const toggleService = (service) => {
    if (services.includes(service)) {
      setServices(services.filter(s => s !== service));
    } else {
      setServices([...services, service]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      company,
      message,
      services
    };

    try {
      const response = await fetch('http://localhost/blennex-website/submit_form.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.status === 'success') {
        alert('Form submitted successfully!');
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form.');
    }
  };

  return (
    <>
      {navbar}
      <div className="form-container">
        <h2 className="form-heading">Let's Create Something <br /> Remarkable Together</h2>
        <p>Have a project in mind?</p>
        <hr />
        <div className="interest-section">
          <p className="interest-label">I'm interested in...</p>
          <div className="interest-buttons">
            {serviceOptions.map((service) => (
              <button
                key={service}
                className={`interest-button ${services.includes(service) ? 'active' : ''}`}
                onClick={() => toggleService(service)}
                type="button"
              >
                {service}
              </button>
            ))}
          </div>
        </div>
       <form onSubmit={handleSubmit} className="contact-form">
  <div className="row two-cols">
    <div className="field-wrapper">
      <input
        className="form-input"
        type="text"
        placeholder="Your Name*"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
       {name === '' && (
        <p className="error-text">*Please fill out this field.</p>
      )}
    </div>
    <div className="field-wrapper">
      <input
        className="form-input"
        type="email"
        placeholder="Your e-mail*"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      {/* only show when invalid */}
      {email === '' && (
        <p className="error-text">*Please fill out this field.</p>
      )}
    </div>
  </div>

  <div className="row full-width">
    <div className="field-wrapper">
      <input
        className="form-input"
        type="text"
        placeholder="Company / Brand Name (Optional)"
        value={company}
        onChange={e => setCompany(e.target.value)}
      />
    </div>
  </div>

  <div className="row full-width">
    <div className="field-wrapper">
      <textarea
        className="form-input textarea"
        placeholder="Tell us about your project"
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
      />
    </div>
  </div>

  <div className="button-row">
   <div>
     <button type="submit" className="submit-button">
      Let’s Connect
    </button>
   </div>
  </div>
</form>
 <div className="social-section">
    <hr className="social-hr" />
    <p className="social-label">Follow Us</p>
    
      <div className="social-icons">
      <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer">
        <img src={instagramIcon} alt="Instagram" />
      </a>
      <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer">
        <img src={facebookIcon} alt="Facebook" />
      </a>
      <a href="https://pinterest.com/yourprofile" target="_blank" rel="noreferrer">
        <img src={pinterestIcon} alt="Pinterest" />
      </a>
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
    </div>
    
  </div>
  </div>
  

    </>
  );
}

export default ContactForm;