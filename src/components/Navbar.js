import React , {useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/navbar.css'
import logo from '../assets/images/logo-light.png'
import {initNavbarScroll} from '../Scripts/navbarScroll.js'
function Navbar() {
 useEffect(()=>{
  const cleanUp = initNavbarScroll();
  return cleanUp;
 },[])

  return (
  <header className="header px-md-5 px-0">
  <nav id="myNavbar" className="navbar navbar-expand-lg fixed-top">
    <div className="container-fluid px-3 px-md-5 css-nav-container">
      <img
        id="navbarLogo"
        className="nav-logo"
        src={logo}
        alt="Blennex Design Logo"
      />
      <div
        className="navigation collapse navbar-collapse ms-lg-5 ms-0 css-nav-link-container"
        id="navbarNav"
      >
        <ul className="navbar-nav d-flex align-items-center css-breadcrumb-nav gap-5">
          <li className="nav-item">
            <a href="#work" className="nav-link active css-nav-link">
              Agency
            </a>
          </li>
          <li className="nav-item dropdown">
            <a href="#services"
              className="nav-link dropdown-toggle css-nav-link d-inline-flex align-items-center"
              role="button"
            >
              Services<span className="breadcrumb-separator ms-1">›</span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#services" className="dropdown-item">
                  Graphic Designing
                </a>
              </li>
              <li>
                <a href="#services" className="dropdown-item">
                  UI/UX
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a href="#packages"
              className="nav-link dropdown-toggle css-nav-link d-inline-flex align-items-center"
              role="button"
            >
              Packages<span className="breadcrumb-separator ms-1">›</span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#packages" className="dropdown-item" >
                  Starter
                </a>
              </li>
              <li>
                <a href="#packages" className="dropdown-item" >
                  Business
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link css-nav-link" href="#mockup">
              Mockups
            </a>
          </li>
        </ul>
        <div>
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a href="#work" className="btn portfolio-link">
                Portfolio
              </a>
            </li>
            <li className="nav-item ">
              <Link to="/contact">
              <button className="btn rounded-pill  css-portfolio-link-blue">
                Contact
              </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
        <button
        className="navbar-toggler "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
    </div>
  </nav>
</header>

  )
}

export default Navbar
