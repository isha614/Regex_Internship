import React from "react";
import "./Hero.css";

export default function () {
  return (
    <>
      <div className="container-xxl bg-primary hero-header">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="text-white mb-4 animated zoomIn">
                IT Consultancy and Software Development
              </h1>
              <p className="text-white pb-3 animated zoomIn">
                Software is a great combination between artistry and
                engineering.
              </p>
              <a
                href="#"
                className="btn btn-outline-light rounded-pill border-2 py-3 px-5 animated slideInRight"
              >
                Learn More
              </a>
            </div>
            <div className="col-lg-6 text-center text-lg-start">
              <img
                className="img-fluid animated zoomIn"
                src="Image/hero.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
