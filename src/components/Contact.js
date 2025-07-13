import React from 'react'
import '../Styles/contact.css'

function Contact() {
  return (
   <section className="contactUs">
  <div className="contact d-flex justify-content-center align-items-center">
    <div className="container m-0 p-0">
      <h2
        className="sectionHeading text-uppercase text-center fw-semibold"
        data-aos="fade-down"
        data-aos-duration={800}
      >
        contact us
      </h2>
      <div className="row g-3 d-flex align-items-start">
        <div
          className="col-12 col-md-6 col-lg-6 p-0 d-flex justify-content-center align-self-center"
          data-aos="fade-right"
          data-aos-duration={800}
          data-aos-delay={200}
        >
          <div className="contactUsText">
            <h4 className="cheading fw-semibold">Let’s Start a Conversation</h4>
            <p className="ctext fw-light">
              Have a question or need a quote? We’d love to hear from you. Fill
              out the form below or reach us directly at:
            </p>
          </div>
        </div>
        <div
          className="cform col-12 col-md-6 col-lg-6 p-0 d-flex justify-content-center"
          data-aos="fade-left"
          data-aos-duration={800}
          data-aos-delay={300}
        >
          <form action="/submit" method="post">
            <div className="address group">
              <label htmlFor="address" className="form-label fw-light">
                Address :{" "}
              </label>
              <textarea
                name="address"
                id="address"
                rows={4}
                className="form-control"
                required=""
                defaultValue={""}
              />
            </div>
            <div className="phoneNo group">
              <label htmlFor="phone" className="form-label fw-light">
                Phone :{" "}
              </label>
              <input type="tel" name="phone" id="phone" required="" />
            </div>
            <div className="email group">
              <label htmlFor="email" className="form-label fw-light">
                Email :{" "}
              </label>
              <input type="email" name="email" id="email" />
            </div>
          <button
  type="submit"
  className="btn btn-primary cf-btn pt-1 pb-1 mt-3 d-block mx-auto d-sm-inline"
>
  Submit
</button>

          </form>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact
