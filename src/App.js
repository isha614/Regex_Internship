import React from "react";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";
import TeamMembers from "./components/TeamMembers/TeamMember";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Features from "./components/Features/Features";


const App=()=>{
  return(
    <>
         <NavBar/>
         <About/>
         <Services/>
         <Features/>
         <TeamMembers/>
         <Contact/>
         <Footer/>
         
    </>
  )
}
export default App;