import React from "react";
import NavBar from "../components/NavBar/NavBar";
import About from "../components/AboutUs/AboutUs";
import Services from "../components/Services/Services";
import TeamMembers from "../components/TeamMembers/TeamMember";
import Footer from "../components/Footer/Footer";
import Features from "../components/Features/Features";
import Testimonial from "../components/Testimonial/Testimonial";
import Hero from "../components/Hero/Hero";




const Home = () => {
    return (
        <>
            <NavBar />
            <Hero/>
            <About />
            <Services />
            <Features />
            <Testimonial />
            <TeamMembers />
            <Footer />
        </>
    )
}

export default Home;