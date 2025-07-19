import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/footer.css'
import logo from '../assets/images/logo-dark.png'

function Footer() {
  return (
   <footer className="footer">
  <div className="footer d-flex justify-content-around">
    <div className="container m-0 w-100">
      <div className="row g-6">
        <div className="quickLinks fdiv col-6 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center flex-column">
          <hr className="fline mb-0" />
          <h4 className="fHeading">Quick Links</h4>
          <div className="footerLinks w-100">
            <ul className="footerul">
              <li className="fcontents">
                <a href="#home" className="fanchor"rel="noopener noreferrer">
                Home </a>
              </li>
              <li className="fcontents">
                <a href="#work" className="fanchor"rel="noopener noreferrer">
                Work</a>
              </li>
              <li className="fcontents">
                <a href="#aboutus" className="fanchor"rel="noopener noreferrer">
                About Us 
                </a>
              </li>
              <li className="fcontents">
                <a href="#services" className="fanchor"rel="noopener noreferrer">
                Services
                </a>
              </li>
              <li className="fcontents">
                <a href="#testimonials" className="fanchor"rel="noopener noreferrer">
                Client Testimonials
                </a>
              </li>
              <li className="fcontents">
                <a href="#work" className="fanchor"rel="noopener noreferrer">
                Portfolio
                </a>
              </li>
              <li className="fcontents">
                <a href="#contactus" className="fanchor"rel="noopener noreferrer">
                Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="quickLinks fdiv col-6 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center flex-column">
          <hr className="fline mb-0" />
          <h4 className="fHeading">Services</h4>
          <div className="footerLinks w-100">
            <ul className="footerul">
              <li className="fcontents">
                <a href="#services" className="fanchor"rel="noopener noreferrer">
                  Graphic Design
                </a>
              </li>
             <li className="fcontents">
                <a href="#services" className="fanchor"rel="noopener noreferrer">
                  UI/UX
                </a>
              </li>
             <li className="fcontents">
                <a href="#services" className="fanchor"rel="noopener noreferrer">
                  Brand Identity
                </a>
              </li>
             <li className="fcontents">
                <a href="#services" className="fanchor"rel="noopener noreferrer">
                  Packaging
                </a>
              </li>
              <li className="fcontents">
                <a href="#services" className="fanchor"rel="noopener noreferrer" >
                Brand Identity &amp; Labels</a>
              </li>
              <li className="fcontents">
                <a href="#services" className="fanchor"rel="noopener noreferrer" >
                3D Product Mockups </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="quickLinks fdiv col-6 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center flex-column">
          <hr className="fline mb-0" />
          <h4 className="fHeading">Address</h4>
          <div className="footerLinks w-100">
            <ul className="footerul">
              <li className="fcontents">
                <a href="#Kuza bandi Swat" className="fanchor"rel="noopener noreferrer">
                Kuza bandi Swat
                </a>
              </li>
              <li className="fcontents">
              <a href="#KPK Pakistan" className="fanchor"rel="noopener noreferrer">
                KPK Pakistan
                </a>
              </li>
              <li className="fcontents">
                <a href="#+9232-9228145" className="fanchor"rel="noopener noreferrer">
                +9232-9228145
                </a>
              </li>
              <li className="fcontents">
                <a href="#blennexofficial@gmail.com" className="fanchor"rel="noopener noreferrer">
                blennexofficial@gmail.com
                </a>
              </li>
              <li className="fcontents">
                <a href="#home" className="fanchor"rel="noopener noreferrer">
                www.blennexdesign.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footercontact fdiv col-6 col-sm-6 col-md-6 col-lg-3 d-flex flex-column justtify-content-center">
          <hr className="fline mb-0" />
          <h4 className="fHeading">Connect</h4>
          <div className="fcontacts">
            <ul className="footerul">
              <li className="fcontents">
                <a href="https://www.behance.net/kashifkhandesign"target="_blank" className="fanchor"rel="noopener noreferrer">
                Behance
                </a>
              </li>
              <li className="fcontents">
                <a href="www.linkedin.com/in/kashifcreativedesigner" target="_blank" className="fanchor"rel="noopener noreferrer">
                Linkedln
                </a>
              </li>
              <li className="fcontents">
                <a href="https://www.instagram.com/p/DDpH8ltqQCY/" target="_blank" className="fanchor"rel="noopener noreferrer">
                Instagram
                </a>
              </li>
              <li className="fcontents">
                <a href="https://dribbble.com/kashifdesign58" target="_blank" className="fanchor"rel="noopener noreferrer">
                Dribble
                </a>
              </li>
              <li className="fcontents">
                <a href="https://x.com/BlennexDesign" target="_blank" className="fanchor"rel="noopener noreferrer">
                Twitter
                </a>
              </li>
              <Link to="/contact">
              <li className="fcontents">
                <a href="#contactform" className="fanchor"rel="noopener noreferrer">
                Contact
                </a>
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="d-flex justify-content-around align-items-center">
  <p className="footerp pt-5">Copyright &copy; 2025 <a href="https://github.com/RatsTech" target="_blank" rel='noopener noreferrer'>Ratstech</a>. All rights reserved.</p>
  <img
        id="navbarLogo"
        className="nav-logo"
        src={logo}
        alt="Blennex Design Logo"
        href="#"
      />
    </div>
</footer>

  )
}

export default Footer
