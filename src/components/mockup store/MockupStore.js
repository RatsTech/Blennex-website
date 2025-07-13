import React from 'react'
import '../../Styles/mockupStore.css'
import {storeContent} from '../../data/storeContent.js'


function MockupStore() {
  return (
<section className="mockup-store-section" data-aos="fade-up">
  <div
    className="container pt-3 mockup-store-back "
    data-aos="fade-up"
    data-aos-delay={100}
  >
    <h2
      className="text-center pt-5 store-title"
      data-aos="zoom-in"
      data-aos-delay={200}
    >
      Mockup Store
    </h2>
    <p
      className="text-center mt-4 store-para"
      data-aos="fade-up"
      data-aos-delay={300}
    >
      Perfect for showcasing your products with high-quality, photorealistic
      visuals.
    </p>
    <div
      className="table-responsive mt-5 pt-5"
      data-aos="fade-up"
      data-aos-delay={400}
    >
      <table className="table table-borderless">
        <thead>
          <tr className="header-line" data-aos="fade-down" data-aos-delay={500}>
            <th>Mockup Type</th>
            <th>Example</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {
            storeContent.map(content=>{
           return <tr data-aos="fade-up" data-aos-delay={600} key={content.id}>
                <td className="bold-row py-4">{content.type}</td>
                <td className="py-4">{content.example}</td>
                <td className="bold-row py-4">${content.price}</td>
                <td className="py-4">
                <a href="#">View Details</a>
                </td>
          </tr>
            })
         }
        </tbody>
      </table>
    </div>
  </div>
</section>



  )
}

export default MockupStore
