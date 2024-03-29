import React from "react";
import "./Testimonial.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Testimonial() {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <>
      <div className="container-xxl bg-white p-0">
        <div className="container-xxl py-6">
          <div className="container">
            <div
              className="mx-auto text-center wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 600 }}
            >
              <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">
                Testimonial
              </div>
              <h2 className="mb-5">What Our Clients Say!</h2>
            </div>
            <div
              className="testimonial-carousel wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <OwlCarousel
                items={3}
                className="owl-carousel"
                loop
                nav
                responsiveClass
                margin={8}
                {...options}
              >
                <div className="testimonial-item rounded p-4">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                  <p>
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid flex-shrink-0 rounded-circle"
                      src="Image/testimonial-1.jpg"
                      alt="testimonial-1"
                    />
                    <div className="ps-3">
                      <h6 className="mb-1">Client Name</h6>
                      <small>Profession</small>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item rounded p-4">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                  <p>
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid flex-shrink-0 rounded-circle"
                      src="Image/testimonial-2.jpg"
                      alt="testimonial-2"
                    />
                    <div className="ps-3">
                      <h6 className="mb-1">Client Name</h6>
                      <small>Profession</small>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item rounded p-4">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                  <p>
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid flex-shrink-0 rounded-circle"
                      src="Image/testimonial-3.jpg"
                      alt="testimonial-3"
                    />
                    <div className="ps-3">
                      <h6 className="mb-1">Client Name</h6>
                      <small>Profession</small>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item rounded p-4">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                  <p>
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid flex-shrink-0 rounded-circle"
                      src="Image/testimonial-4.jpg"
                      alt="testimonial-4"
                    />
                    <div className="ps-3">
                      <h6 className="mb-1">Client Name</h6>
                      <small>Profession</small>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
