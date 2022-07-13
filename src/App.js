import React from "react";
import Home from "./pages/Home";
import Feature from "./pages/Feature";
import Quote from "./pages/FreeQuote";
import { Route, Routes } from "react-router";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";
import About from "./pages/AboutUs";
import Service from "./pages/Services";
import Team from "./pages/Team";
import TestimonialPage from "./pages/Testimonial";


const App=()=>{
  return(
    <>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Feature" element={<Feature/>} />
      <Route path="/Quote" element={<Quote/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/404" element={<Page404/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Service" element={<Service/>} />
      <Route path="/Team" element={<Team/>} />
      <Route path="/Testimonial" element={<TestimonialPage/>} />
   

    </Routes>
  
       
       
         
    </>
  )
}
export default App;