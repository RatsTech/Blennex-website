import React from 'react'
import '../../Styles/services.css'
import { servicesContent } from '../../data/servicesContent.js'
import IndividualService from './IndividualService.js'





function Services() {
  return (
 <section className="three" data-aos="fade-up" id="services">
  <div className="container-fluid ">
    <div className="our_work d-flex justify-content-center">
      <h1
        className="mt-md-5 py-5 text-center portfolio-title"
        data-aos="fade-down"
        data-aos-delay={100}
      >
        Crafted Services Built to Scale Your Brand
      </h1>
    </div>
    <div className="row d-flex justify-content-center mt-sm-5">
      <div className="col-sm-10 col-12">
        <div className="row d-flex justify-content-center">
          {
            servicesContent.map((service,index)=>{
             return <IndividualService key={index} {...service} />
            })
          }
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Services
