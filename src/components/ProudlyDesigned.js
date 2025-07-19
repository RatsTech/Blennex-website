import React, {useEffect} from 'react'
import '../Styles/proudlyDesign.css'
import {initCounters} from '../Scripts/intCounter.js'
import logo from '../assets/images/logo.png'

function ProudlyDesigned() {

  useEffect(()=>{
    initCounters();
  },[])

  return (
    <section id="aboutus">
  <div className="Proudly_Designed container-fluid mt-1 px-md-5 px-3  ">
    <div className="row py-4 ">
      <h2
        className="mt-sm-5 mt-2 text-center portfolio-title"
        data-aos="fade-down"
        data-aos-duration={1000}
      >
        Proudly Designed For
      </h2>
      <div className="logo-slider-container overflow-hidden">
        <ul className="logo-slider d-flex">
          <li>
            <img src={logo} alt="Our client brand" />
          </li>
          <li>
            <img src={logo} alt='Our client brand'/>
          </li>
          <li>
            <img src={logo} alt='our client brand' />
          </li>
          <li>
            <img src={logo} alt='our client brand' />
          </li>
          <li>
            <img src={logo} alt='our client brand'/>
          </li>
          {/* Duplicate for smooth infinite scroll */}
          <li>
            <img src={logo} alt ='our client brand ' />
          </li>
          <li>
            <img src={logo} alt ='our client brand ' />
          </li>
          <li>
            <img src={logo} alt ='our client brand ' />
          </li>
          <li>
            <img src={logo} alt ='our client brand ' />
          </li>
          <li>
            <img src={logo} alt ='our client brand ' />
          </li>
          <li>
            <img src={logo} alt ='our client brand ' />
          </li>
          <li>
            <img src={logo} alt ='our client brand ' />
          </li>
          <li>
            <img src={logo} alt ='our client brand ' />
          </li>
          <li>
            <img src={logo} alt ='our client brand ' />
          </li>
          <li>
            <img src={logo} alt ='our client brand ' />
          </li>
          <li>
            <img src={logo} alt ='our client brand ' />
          </li>
          <li>
            <img src={logo} alt ='our client brand ' />
          </li>
          <li>
            <img src={logo} alt ='our client brand ' />
          </li>
          <li>
            <img src={logo} alt ='our client brand ' />
          </li>
          <li>
            <img src={logo} alt ='our client brand ' />
          </li>
          <li>
            <img src={logo} alt ='our client brand ' />
          </li>
        </ul>
      </div>
    </div>
   <div className="row review d-flex justify-content-center mt-md-5 mt-2 py-5">
  <div className="col-md-8 col-12">
    {/* First Row: Years + Happy Clients */}
    <div className="row text-center text-charcoal">
      {/* Years of Experience */}
      <div className="col-6 col-md-4" data-aos="fade-up" data-aos-delay={100}>
        <span>
          <h1 className="count" data-target={6} data-format="2digit">
            00
          </h1>
          <p className="css-portfolio-p">Years of Experience</p>
        </span>
      </div>

      {/* Happy Clients */}
      <div className="col-6 col-md-4" data-aos="fade-up" data-aos-delay={200}>
        <span>
          <h1 className="count" data-target={300} data-format="number-plus">
            0+
          </h1>
          <p className="css-portfolio-p">Happy Clients Worldwide</p>
        </span>
      </div>

      {/* Rating (only full width on small screens, stays in same row on md+) */}
      <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay={300}>
        <span>
          <h1 className="count rating" data-target={5.0} data-format="star">
            ⭐ 0.0
          </h1>
          <p className="css-portfolio-p">Rated on Upwork/Fiverr</p>
        </span>
      </div>
    </div>
  </div>
</div>
  </div>
</section>

  )
}

export default ProudlyDesigned
