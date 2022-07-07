import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import AboutUs from "../components/AboutUs/AboutUs";
import Features from "../components/Features/Features";
import TeamMembers from "../components/TeamMembers/TeamMember";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <>
      <div className="container-xxl position-relative p-0">
        <NavBar />
        <Banner title="About Us" submenu="About" />
        <AboutUs />
        <Features />
        <TeamMembers />
        <Footer />
      </div>
    </>
  );
};
export default About;
