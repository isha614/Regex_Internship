import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import Services from "../components/Services/Services";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../components/Footer/Footer";

const Service=()=>{
    return(
      <div class="container-xxl bg-white p-0">
        <NavBar />
        <Banner title="Services" submenu="Services" />
        <Services />
        <Testimonial />
        <Footer />
      </div>
    )
}
 export default Service;