import React from 'react'
import '../../Styles/whyClientLove.css'
import { clientDetails } from '../../data/clientDetails.js'
import Client from './Client'

function WhyClientsLove() {
  return (
   <section className="WhyClientsLoveBlennex" id="testimonials">
  <div className="clientsLoveContainer d-flex justify-content-center align-items-center">
    <div className="container cl-container m-0 p-0 w-100">
      <h2
        className="sectionHeading text-center fw-semibold py-4"
        data-aos="fade-down"
        data-aos-duration={1000}
      >
        Why Clients Love Blennex
      </h2>
      <div className="row g-3 w-100 pb-5 ps-3">
       
       
      {clientDetails.map(
        clientDetail=><Client key={clientDetail.id} {...clientDetail}/>
    )}
       
       
       
       
       
      </div>
    </div>
  </div>
</section>

  )
}

export default WhyClientsLove
