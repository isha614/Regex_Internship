import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

const ContactApp = () => {
  return (
    <>
      <NavBar />
      <Banner title="Contact Us" submenu="Contact" />
      <Contact/> 
      <Footer />
    </>
  );
};
export default ContactApp;
