import React from 'react'
import '../Styles/footer.css'

function Footer() {
  return (
   <footer className="footer">
  <div className="footer d-flex justify-content-center align-items-center">
    <div className="container m-0 w-100">
      <div className="row g-3">
        <div className="quickLinks fdiv col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center flex-column">
          <hr className="fline mb-0" />
          <h4 className="fHeading">Quick Links</h4>
          <div className="footerLinks w-100">
            <ul>
              <li className="fcontents">
                <a href="#" className="fanchor">
                Home </a>
              </li>
              <li className="fcontents">
                <a href="#" className="fanchor">
                Work</a>
              </li>
              <li className="fcontents">
                <a href="#" className="fanchor">
                About Us 
                </a>
              </li>
              <li className="fcontents">
                <a href="#" className="fanchor">
                Services
                </a>
              </li>
              <li className="fcontents">
                <a href="#" className="fanchor">
                Client Testimonials
                </a>
              </li>
              <li className="fcontents">
                <a href="#" className="fanchor">
                Portfolio
                </a>
              </li>
              <li className="fcontents">
                <a href="#" className="fanchor">
                Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="quickLinks fdiv col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center flex-column">
          <hr className="fline mb-0" />
          <h4 className="fHeading">Services</h4>
          <div className="footerLinks w-100">
            <ul>
              <li className="fcontents">
                <a href="#" className="fanchor">
                  Graphic Design
                </a>
              </li>
             <li className="fcontents">
                <a href="#" className="fanchor">
                  UI/UX
                </a>
              </li>
             <li className="fcontents">
                <a href="#" className="fanchor">
                  Brand Identity
                </a>
              </li>
             <li className="fcontents">
                <a href="#" className="fanchor">
                  Packaging
                </a>
              </li>
              <li className="fcontents">
                <a href="#" className="fanchor" >
                Brand Identity &amp; Labels</a>
              </li>
              <li className="fcontents">
                <a href="#" className="fanchor" >
                3D Product Mockups </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="quickLinks fdiv col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center flex-column">
          <hr className="fline mb-0" />
          <h4 className="fHeading">Address</h4>
          <div className="footerLinks w-100">
            <ul>
              <li className="fcontents">
                <a href="#" className="fanchor">
                Kuza bandi Swat
                </a>
              </li>
              <li className="fcontents">
              <a href="#" className="fanchor">
                KPK Pakistan
                </a>
              </li>
              <li className="fcontents">
                <a href="#" className="fanchor">
                +9232-9228145
                </a>
              </li>
              <li className="fcontents">
                <a href="#" className="fanchor">
                Email
                </a>
              </li>
              <li className="fcontents">
                <a href="#" className="fanchor">
                www.blennexdesign.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footercontact fdiv col-12 col-sm-6 col-md-6 col-lg-3 d-flex flex-column align-items-start">
          <hr className="fline mb-0" />
          <h4 className="fHeading">Connect</h4>
          <div className="fcontacts">
            <ul>
              <li className="fcontents">
                <a href="" className="fanchor">
                Behance
                </a>
              </li>
              <li className="fcontents">
                <a href="#" className="fanchor">
                Twitter
                </a>
              </li>
              <li className="fcontents">
                <a href="" className="fanchor">
                Instagram
                </a>
              </li>
              <li className="fcontents">
                <a href="" className="fanchor">
                Dribble
                </a>
              </li>
              <li className="fcontents">
                <a href="" className="fanchor">
                Carrers
                </a>
              </li>
              <li className="fcontents">
                <a href="" className="fanchor">
                Contact
                </a>
              </li>
            </ul>
            <div className="fsignup-container d-flex flex-wrap align-items-start">
              <input type="text" className="fsignup-input ms-4 mb-3" />
              <button className="footer-btn btn btn-primary text-uppercase fw-semibold ms-4">
                sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer
