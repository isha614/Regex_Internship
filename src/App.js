import React from "react";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Services from "./Components/Services";
import TeamMembers from "./Components/TeamMembers";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


const App=()=>{
  return(
    <>
         <NavBar/>
      
         <About/>
         <Services/>
         <TeamMembers/>
         <Contact/>
         <Footer/>
         
    </>
  )
}
export default App;