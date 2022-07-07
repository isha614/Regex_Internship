import React from "react";
import "../../bootstrap.min.css";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light  px-4 px-lg-5 py-3 py-lg-0">
          <a href="/" className="navbar-brand p-0">
            <h1 className="m-0">RegEx</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="/" className="nav-item nav-link ">
                Home
              </a>
              <a href="/About" className="nav-item nav-link">
                About
              </a>
              <a href="/Service" className="nav-item nav-link">
                Service
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  <a href="/Feature" className="dropdown-item">
                    Features
                  </a>
                  <a href="/Quote" className="dropdown-item">
                    Free Quotes
                  </a>

                  <a href="/Team" className="dropdown-item">
                    Our Team
                  </a>
                  <a href="/Testimonial" className="dropdown-item">
                    Testimonial
                  </a>
                  <a href="/404" className="dropdown-item">
                    404 Page
                  </a>
                </div>
              </div>
              <a href="/Contact" className="nav-item nav-link">
                Contact
              </a>
            </div>
            <a
              href="/Quote"
              className="btn btn-light rounded-pill text-primary py-2 px-4 ms-lg-5"
            >
              Free Quote
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};
export default NavBar;
