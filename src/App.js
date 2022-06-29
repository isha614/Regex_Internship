import React from "react";
import NavBar from "./Pages/NavBar/NavBar";
import About from "./Pages/AboutUs/AboutUs";
import Services from "./Pages/Services/Services";
import TeamMembers from "./Pages/TeamMembers/TeamMember";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import Features from "./Pages/Features/Features";


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