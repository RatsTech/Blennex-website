import React from 'react'

function IndividualService({icon, title , description}) {
  return (
    <div
            className="col-lg-4 col-12"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <div className="card text-center border-0">
              <div className="card1 card-body">
                <div className="d-flex justify-content-center py-3">
                  <img src={icon} alt={title} width="100px" />
                </div>
                <h5 className="card-title py-3">{title}</h5>
                <p className="card-text">
                 {description}
                </p>
                <a
                  href="#"
                  className="btn btn-primary text-uppercase css-craft-btn"
                >
                  Learn more
                  <svg
                    width={28}
                    height={28}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.41675 15.5834L15.5834 6.41675M15.5834 6.41675H6.41675M15.5834 6.41675V15.5834"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
  )
}

export default IndividualService
