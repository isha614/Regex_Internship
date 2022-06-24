import React from "react";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Services from "./Components/Services";
import TeamMembers from "./Components/TeamMembers";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Features from "./Components/Features";


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