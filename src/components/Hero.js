import React from 'react'
import '../Styles/hero.css'
function Hero() {
  return (
    
<section className="hero px-md-5 py-5">
  <div className="container-fluid css-hero-section">
    <h1
      data-aos="fade-up"
      data-aos-delay={100}
      data-aos-duration={800}
      data-aos-easing="ease-in-out"
    >
      Shape your
    </h1>
    <h1
      data-aos="fade-up"
      data-aos-delay={300}
      data-aos-duration={800}
      data-aos-easing="ease-in-out"
    >
      <span>Brand</span>, Visually
    </h1>
    <p
      className="py-3"
      data-aos="fade-up"
      data-aos-delay={500}
      data-aos-duration={1000}
      data-aos-easing="ease-in-out"
    >
      Impactful Packaging &amp; 3D Designs That Speak Without Words.
    </p>
  </div>
  <div
    className="button2 d-flex justify-content-lg-end justify-content-center py-5"
    data-aos="zoom-in-up"
    data-aos-delay={700}
    data-aos-duration={800}
    data-aos-easing="ease-out-back"
  >
    <div className="ripple-container">
      <button className="btn bton rounded-pill py-2 px-4 organic-ripple-button">
        New Projects?
        <span className="ripple ripple1" />
        <span className="ripple ripple2" />
        <span className="ripple ripple3" />
      </button>
    </div>
  </div>
</section>

  )
}

export default Hero
