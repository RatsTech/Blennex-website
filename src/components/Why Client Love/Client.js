import React from 'react'

function Client({img, quote,clientTitle,clientInfo}) {
  return (
     <div
          className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center p-0 m-0"
          data-aos="fade-up"
          data-aos-duration={800}
          data-aos-delay={200}
        >
          <div className="client border border-1 d-flex flex-wrap">
            <h4 className="clientHeading fw-semibold fs-4 w-100 text-start">
              {`"${quote}"`}
            </h4>
            <div className="imgandtext d-flex align-items-center justify-content-center">
              <div className="clientimg rounded-circle overflow-hidden me-3 mb-2">
                <img
                  src={img}
                  className="w-100 h-100 object-fit-cover"
                  alt="Client image"
                />
              </div>
              <div className="clientinfo text-start flex-grow-1">
                <h6 className="clientTitle fw-semibold">{clientTitle}</h6>
                <p className="clientdescription fw-light mb-0">
                 {clientInfo}
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Client
