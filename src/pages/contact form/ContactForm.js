import React, { useState,useEffect } from 'react';
import StatusMessage from '../../components/StatusMessage';
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
  const [submissionStatus,setSubmissionStatus] = useState(null)

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
      const response = await fetch('https://blennexdesign.com/submit_form.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.status === 'success') {
        setSubmissionStatus('success');
        setName('');
        setEmail('');
        setCompany('')
        setMessage('');
        setServices([])
      } else {
        setSubmissionStatus('error')
      }
    } catch (error) {
     setSubmissionStatus('error')
    }
  };


 useEffect(()=>{
  if(submissionStatus){
    const timer = setTimeout(() => {
      setSubmissionStatus(null)
    }, 5000);

     return ()=> clearTimeout(timer)
  }
 
 },[submissionStatus])

  return (
    <>
      {navbar}
      <div className="form-container" id="contactform">
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
        <StatusMessage
            type={submissionStatus}
            message={
              submissionStatus === 'success'
                ? '🎉 Your message has been sent successfully!'
                : submissionStatus === 'error'
                ? '❌ Something went wrong. Please try again later.'
                : ''
            }
          />

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
        autoComplete='name'
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
        autoComplete='email'
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
        autoComplete='organization'
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
        autoComplete='off'
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