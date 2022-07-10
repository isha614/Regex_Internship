import React from "react";
import "../../bootstrap.min.css";
import "./Services.css";
import ServiceCard from "./utilities/serviceCards/ServiceCard";
const Services=()=>{
  let props={
    paraText:"Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem."
   }
     let prop1={
      iconUrl: "fa fa-user-tie fa-2x",
      paraHead: "Business Research"
     }
     
     let prop2={
       iconUrl:"fa fa-chart-pie fa-2x",
       paraHead:"Stretagic Planning"
     }
     let prop3={
      iconUrl:"fa fa-chart-line fa-2x",
      paraHead:"Market Analysis"
     }
     let prop4={
      iconUrl:"fa fa-chart-area fa-2x",
      paraHead:"Financial Analaysis"
     }
     let prop5={
      iconUrl:"fa fa-balance-scale fa-2x",
      paraHead:"Legal Advisory"
     }
     let prop6={
      iconUrl:"fa fa-house-damage fa-2x",
      paraHead:"Tax &amp; Insurance"
     }
    return(
        <div className="container-xxl py-6">
        <div className="container">
          <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Our Services</div>
            <h2 className="mb-5">We Provide Solutions On Your Business</h2>
          </div>
          <div className="row g-4">
            <ServiceCard {...prop1} {...props}/>
            <ServiceCard {...prop2} {...props}/>
            <ServiceCard {...prop3} {...props}/>
            <ServiceCard {...prop4} {...props}/>
            <ServiceCard {...prop5} {...props}/>
           <ServiceCard {...prop6} {...props}/>
          </div>
        </div>
      </div>
    
    );
  }

    

export default Services;