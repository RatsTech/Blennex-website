import React from 'react'
import '../Styles/portfolio.css'
import {rowOneImages,rowTwoImages} from '../data/sliderImages.js'


function Portfolio() {
  return (
   <section className="portfolio-section mt-1">
  {/* First row (scrolling left) */}
  <div className="mt-1">
    <h3
      className="text-center portfolio-title"
      data-aos="fade-down"
      data-aos-duration={1000}
    >
      Our Work Speaks Louder Than Words
    </h3>
    <div className="scroll-wrapper">
      <div className="scroll-row" id="row1">
        {rowOneImages.map((img,index)=>{
            return(<img src={img.img} key={index} alt={img.name}/>)
        })}
      </div>
    </div>
    {/* Second row (scrolling right) */}
    <div className="scroll-wrapper">
      <div className="scroll-row reverse" id="row2">
       {rowTwoImages.map((img,index)=>{
        return(<img src={img.img} key={index} alt={img.name}/>)
       })}
      </div>
    </div>
  </div>
</section>

  )
}

export default Portfolio
