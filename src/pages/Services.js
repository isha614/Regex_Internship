import React from "react";

const Service=()=>{
    return(
        <div>
        <div className="container-xxl position-relative p-0">
          <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="index.html" className="navbar-brand p-0">
              <h1 className="m-0">BizConsult</h1>
              {/* <img src="img/logo.png" alt="Logo"> */}
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <a href="index.html" className="nav-item nav-link">Home</a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <a href="service.html" className="nav-item nav-link active">Service</a>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu m-0">
                    <a href="feature.html" className="dropdown-item">Features</a>
                    <a href="quote.html" className="dropdown-item">Free Quote</a>
                    <a href="team.html" className="dropdown-item">Our Team</a>
                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                    <a href="404.html" className="dropdown-item">404 Page</a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
              </div>
              <a href className="btn btn-light rounded-pill text-primary py-2 px-4 ms-lg-5">Free Quote</a>
            </div>
          </nav>
          <div className="container-xxl bg-primary page-header">
            <div className="container text-center">
              <h1 className="text-white animated zoomIn mb-3">Services</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                  <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* Navbar & Hero End */}
        {/* Service Start */}
        <div className="container-xxl py-6">
          <div className="container">
            <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
              <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Our Services</div>
              <h2 className="mb-5">We Provide Solutions On Your Business</h2>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item rounded h-100">
                  <div className="d-flex justify-content-between">
                    <div className="service-icon">
                      <i className="fa fa-user-tie fa-2x" />
                    </div>
                    <a className="service-btn" href>
                      <i className="fa fa-link fa-2x" />
                    </a>
                  </div>
                  <div className="p-5">
                    <h5 className="mb-3">Business Research</h5>
                    <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item rounded h-100">
                  <div className="d-flex justify-content-between">
                    <div className="service-icon">
                      <i className="fa fa-chart-pie fa-2x" />
                    </div>
                    <a className="service-btn" href>
                      <i className="fa fa-link fa-2x" />
                    </a>
                  </div>
                  <div className="p-5">
                    <h5 className="mb-3">Stretagic Planning</h5>
                    <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div className="service-item rounded h-100">
                  <div className="d-flex justify-content-between">
                    <div className="service-icon">
                      <i className="fa fa-chart-line fa-2x" />
                    </div>
                    <a className="service-btn" href>
                      <i className="fa fa-link fa-2x" />
                    </a>
                  </div>
                  <div className="p-5">
                    <h5 className="mb-3">Market Analysis</h5>
                    <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item rounded h-100">
                  <div className="d-flex justify-content-between">
                    <div className="service-icon">
                      <i className="fa fa-chart-area fa-2x" />
                    </div>
                    <a className="service-btn" href>
                      <i className="fa fa-link fa-2x" />
                    </a>
                  </div>
                  <div className="p-5">
                    <h5 className="mb-3">Financial Analaysis</h5>
                    <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item rounded h-100">
                  <div className="d-flex justify-content-between">
                    <div className="service-icon">
                      <i className="fa fa-balance-scale fa-2x" />
                    </div>
                    <a className="service-btn" href>
                      <i className="fa fa-link fa-2x" />
                    </a>
                  </div>
                  <div className="p-5">
                    <h5 className="mb-3">legal Advisory</h5>
                    <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div className="service-item rounded h-100">
                  <div className="d-flex justify-content-between">
                    <div className="service-icon">
                      <i className="fa fa-house-damage fa-2x" />
                    </div>
                    <a className="service-btn" href>
                      <i className="fa fa-link fa-2x" />
                    </a>
                  </div>
                  <div className="p-5">
                    <h5 className="mb-3">Tax &amp; Insurance</h5>
                    <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
        {/* Testimonial Start */}
        <div className="container-xxl py-6">
          <div className="container">
            <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
              <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Testimonial</div>
              <h2 className="mb-5">What Our Clients Say!</h2>
            </div>
            <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
              <div className="testimonial-item rounded p-4">
                <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                <div className="d-flex align-items-center">
                  <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" />
                  <div className="ps-3">
                    <h6 className="mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
              <div className="testimonial-item rounded p-4">
                <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                <div className="d-flex align-items-center">
                  <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" />
                  <div className="ps-3">
                    <h6 className="mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
              <div className="testimonial-item rounded p-4">
                <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                <div className="d-flex align-items-center">
                  <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" />
                  <div className="ps-3">
                    <h6 className="mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
              <div className="testimonial-item rounded p-4">
                <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                <div className="d-flex align-items-center">
                  <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-4.jpg" />
                  <div className="ps-3">
                    <h6 className="mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
        {/* Footer Start */}
        <div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{marginTop: '6rem'}}>
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-md-6 col-lg-3">
                <h5 className="text-white mb-4">Get In Touch</h5>
                <p><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
                <p><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
                <p><i className="fa fa-envelope me-3" />info@example.com</p>
                <div className="d-flex pt-2">
                  <a className="btn btn-outline-light btn-social" href><i className="fab fa-twitter" /></a>
                  <a className="btn btn-outline-light btn-social" href><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-outline-light btn-social" href><i className="fab fa-youtube" /></a>
                  <a className="btn btn-outline-light btn-social" href><i className="fab fa-instagram" /></a>
                  <a className="btn btn-outline-light btn-social" href><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <h5 className="text-white mb-4">Quick Link</h5>
                <a className="btn btn-link" href>About Us</a>
                <a className="btn btn-link" href>Contact Us</a>
                <a className="btn btn-link" href>Privacy Policy</a>
                <a className="btn btn-link" href>Terms &amp; Condition</a>
                <a className="btn btn-link" href>Career</a>
              </div>
              <div className="col-md-6 col-lg-3">
                <h5 className="text-white mb-4">Popular Link</h5>
                <a className="btn btn-link" href>About Us</a>
                <a className="btn btn-link" href>Contact Us</a>
                <a className="btn btn-link" href>Privacy Policy</a>
                <a className="btn btn-link" href>Terms &amp; Condition</a>
                <a className="btn btn-link" href>Career</a>
              </div>
              <div className="col-md-6 col-lg-3">
                <h5 className="text-white mb-4">Newsletter</h5>
                <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                <div className="position-relative w-100 mt-3">
                  <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{height: '48px'}} />
                  <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4" /></button>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
                    <div class="copyright">
                        <div class="row">
                            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a class="border-bottom" href="/">RegEx</a>, All Right Reserved.


                            </div>

                        </div>
                    </div>
                </div>
        </div>
        
      </div>
    )
}
 export default Service;