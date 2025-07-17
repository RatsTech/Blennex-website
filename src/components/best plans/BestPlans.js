import React from 'react'
import '../../Styles/bestPlans.css'
import { bestPlans } from '../../data/bestPlansDetails.js'
import PackageCard from './PackageCard.js'
function BestPlans() {
  return (
  <section className="best-plan-section mt-5">
  <div className="px-2 pt-4 py-5 best-plan-container ">
    <h2
      className="text-center pt-1 heading-txt"
      data-aos="fade-up"
      data-aos-duration={1000}
    >
      Choose Best Plan For Your Business
    </h2>
    <div className="cards-grid mt-4 pt-3">
    { bestPlans.map((bestPlan,index)=>(
      <PackageCard key={index} {...bestPlan}/>
    ))}
    
    </div>
  </div>
</section>

  )
}

export default BestPlans
