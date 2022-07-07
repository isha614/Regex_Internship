import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../components/Footer/Footer";

const TestimonialPage = () => {
  return (
    <>
      <NavBar />
      <Banner title="Testimonial" submenu="Testimonial" />
      <Testimonial />
      <Footer />
    </>
  );
};
export default TestimonialPage;