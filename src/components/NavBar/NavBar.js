import React from "react";
import { NavLink } from "react-router-dom";
import "../../bootstrap.min.css";
import "./NavBar.css";

const NavBar = () => {
    return (
        <>


            <div class="container-xxl position-relative p-0">
                <nav class="navbar navbar-expand-lg navbar-light  px-4 px-lg-5 py-3 py-lg-0">
                    <a href="/" class="navbar-brand p-0">
                        <h1 class="m-0">RegEx</h1>

                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto py-0">
                            <a href="/" class="nav-item nav-link ">Home</a>
                            <a href="/About" class="nav-item nav-link">About</a>
                            <a href="/Service" class="nav-item nav-link">Service</a>
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div class="dropdown-menu m-0">
                                    <a href="/Feature" class="dropdown-item">Features</a>
                                    <a href="/Quote" class="dropdown-item">Free Quotes</a>

                                    <a href="/Team" class="dropdown-item">Our Team</a>
                                    <a href="/Testimonial" className="dropdown-item">Testimonial</a>
                                    <a href="/404" class="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="/Contact" class="nav-item nav-link">Contact</a>
                        </div>
                        <a href="/Quote" class="btn btn-light rounded-pill text-primary py-2 px-4 ms-lg-5">Free Quote</a>
                    </div>
                </nav>
                <div class="container-xxl bg-primary hero-header">
                    <div class="container">
                        <div class="row g-5 align-items-center">
                            <div class="col-lg-6 text-center text-lg-start">
                                <h1 class="text-white mb-4 animated zoomIn">IT Consultancy and Software Development</h1>
                                <p class="text-white pb-3 animated zoomIn">Software is a great combination between artistry and engineering.</p>
                                <a href="#" class="btn btn-outline-light rounded-pill border-2 py-3 px-5 animated slideInRight">Learn More</a>
                            </div>
                            <div class="col-lg-6 text-center text-lg-start">
                                <img class="img-fluid animated zoomIn" src="Image/hero.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
export default NavBar;