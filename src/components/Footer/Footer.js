import React from "react";
import "../../bootstrap.min.css";
import "./Footer.css";
import BackToTop from "./BackToTop";
const Footer=()=>{
    return (
      <>
        <div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{marginTop: '6rem'}}>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3">
              <h5 className="text-white mb-4">Get In Touch</h5>
              <p>
                <i className="fa fa-map-marker-alt me-3" />123 Street, New York,
                USA
              </p>
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
              <a className="btn btn-link" href='/About'>About Us</a>
              <a className="btn btn-link" href='/Contact'>Contact Us</a>
              <a className="btn btn-link" href="">Privacy Policy</a>
              <a className="btn btn-link" href="">Terms &amp; Condition</a>
              <a className="btn btn-link" href="">Career</a>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className="text-white mb-4">Popular Link</h5>
              <a className="btn btn-link" href='/About'>About Us</a>
              <a className="btn btn-link" href='/Contact'>Contact Us</a>
              <a className="btn btn-link" href="">Privacy Policy</a>
              <a className="btn btn-link" href="">Terms &amp; Condition</a>
              <a className="btn btn-link" href="">Career</a>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className="text-white mb-4">Newsletter</h5>
              <p>
                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                Curabitur facilisis ornare velit non vulpu
              </p>
              <div className="position-relative w-100 mt-3">
                <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{height: '48px'}} />
                <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2">
                  <i className="fa fa-paper-plane text-primary fs-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                © <a className="border-bottom" href="#">RegEx</a>, All
                Right Reserved.
               
              </div>
              <div className="col-md-6 text-center text-md-end">
              <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackToTop/>
      </>
    )
}
export default Footer;