import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";

const Feature = () => {
    return (
        <>
        <NavBar />
        <Banner title="Features" submenu="Features" />
        <Features />
        <Footer />
        </>
    )
}
export default Feature;
