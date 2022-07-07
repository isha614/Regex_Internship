import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import TeamMembers from "../components/TeamMembers/TeamMember";
import Footer from "../components/Footer/Footer";

const Team=()=>{
    return(
        <>
        <NavBar />
        <Banner title="Our Team" submenu="Our Team" />
        <TeamMembers />
        <Footer />      
        </>
    )
}
 export default Team;