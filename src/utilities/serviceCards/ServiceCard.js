import React from "react";

const ServiceCard=({iconUrl,paraHead,paraText})=>{
    return (
        <>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded h-100">
                <div className="d-flex justify-content-between">
                  <div className="service-icon">
                    <i className={iconUrl} />
                  </div>
                  <a className="service-btn" href>
                    <i className="fa fa-link fa-2x" />
                  </a>
                </div>
                <div className="p-5">
                  <h5 className="mb-3">{paraHead}</h5>
                  <span>{paraText}</span>
                </div>
              </div>
            </div>
        </>
    )
}
export default ServiceCard;