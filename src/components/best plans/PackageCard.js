import React, {useRef,useState} from 'react'

function PackageCard({title, description, price , includes}) {
  // const includesRef = useRef(null);
  // const [isShown,setIsShown] = useState(false);
  // const firstThree = includes.slice(0,2);
  // const remainingList = includes.slice(2);
  // const remaining = remainingList.length;

  

// const toggleIncludes = () => {
//   if (includesRef.current) {
//     includesRef.current.classList.toggle("show");
//     setIsShown(prv=>!prv);

//   }
// };


  return (
           <div
        className="best-plan-card-wrapper"
        data-aos="fade-up"
        data-aos-duration={1000}
        data-aos-delay={100}
      >
        <div className="card card-css h-100 best-plan-card">
          <div className="">
            <h4 className="fw-bold">{title}</h4>
            <p className=" text-muted mb-4">
              {description}
            </p>
            <h2 className=" fw-bold price-text">${price}</h2>
          </div>
          <hr className="thicker-hr" />
          <div className="icon-div">
            <svg
              width={17}
              height={15}
              viewBox="0 0 17 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8334 1.83325L3.95837 13.7083L1.58337 11.3333"
                stroke="#4A4849"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Includes </p>
          </div>
          <ul className='list-unstyled ms-0  spaced-list'>
            {
              includes.map((item,index)=>(<li key={index+1}><span>•</span> {item}</li>))
            }
          </ul>
        
     

          <div className="d-flex justify-content-around  small mb-4">
            <div>
              <svg
                className="best-plan-small-icon"
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19.3809C16.0626 19.3809 20.1666 15.2769 20.1666 10.2143C20.1666 5.15166 16.0626 1.04761 11 1.04761C5.93737 1.04761 1.83331 5.15166 1.83331 10.2143C1.83331 15.2769 5.93737 19.3809 11 19.3809Z"
                  stroke="#4A4849"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 5.5V11L14.6667 9.16667"
                  stroke="#4A4849"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="best-plan-p">5-days delivery</p>
            </div>
            <div>
              <svg
                className="best-plan-small-icon"
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.75 11C2.75 8.81196 3.61919 6.71354 5.16637 5.16637C6.71354 3.61919 8.81196 2.75 11 2.75C13.3064 2.75868 15.5201 3.65862 17.1783 5.26167L19.25 7.33333"
                  stroke="#4A4849"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.25 2.75V7.33333H14.6666"
                  stroke="#4A4849"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.25 11C19.25 13.188 18.3808 15.2865 16.8336 16.8336C15.2865 18.3808 13.188 19.25 11 19.25C8.69362 19.2413 6.47989 18.3414 4.82167 16.7383L2.75 14.6667"
                  stroke="#4A4849"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.33333 14.6667H2.75V19.2501"
                  stroke="#4A4849"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="best-plan-p">Unlimited Revisions</p>
            </div>
          </div>
          <div className="text-center">
            <button
              className="btn btn-info text-white rounded-pill plans-button"
              aria-label="Get Started for Brand Identity Package"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
  )
}

export default PackageCard
