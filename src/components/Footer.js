import React from 'react'
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
        <div className="quickLinks fdiv col-6 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center flex-column">
          <hr className="fline mb-0" />
          <h4 className="fHeading">Services</h4>
          <div className="footerLinks w-100">
            <ul className="footerul">
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
        <div className="quickLinks fdiv col-6 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center flex-column">
          <hr className="fline mb-0" />
          <h4 className="fHeading">Address</h4>
          <div className="footerLinks w-100">
            <ul className="footerul">
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
        <div className="footercontact fdiv col-6 col-sm-6 col-md-6 col-lg-3 d-flex flex-column justtify-content-center">
          <hr className="fline mb-0" />
          <h4 className="fHeading">Connect</h4>
          <div className="fcontacts">
            <ul className="footerul">
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
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="d-flex justify-content-around align-items-center">
  <p className="footerp pt-5">Copyright &copy; 2025 <a href="https://github.com/RatsTech" target="_blank">Ratstech</a>. All rights reserved.</p>
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
