import React from "react";

export default function TeamMemberCard({name, designation, imageSource}) {
  return (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="team-item">
        <h5>{name}</h5>
        <p className="mb-4">{designation}</p>
        <img
          className="img-fluid rounded-circle w-100 mb-4"
          src={imageSource}
          alt=""
        />
        <div className="d-flex justify-content-center">
          <a className="btn btn-square text-primary bg-white m-1" href="">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-square text-primary bg-white m-1" href="">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn btn-square text-primary bg-white m-1" href="">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
