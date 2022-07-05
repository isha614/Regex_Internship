import React from 'react';



const Quote = () => {
    return (
        <>
            <div className="container-xxl position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href="/" className="navbar-brand p-0">
                        <h1 className="m-0">RegEx</h1>

                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <a href="/" className="nav-item nav-link">Home</a>
                            <a href="/About" className="nav-item nav-link">About</a>
                            <a href="/Service" className="nav-item nav-link">Service</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0">
                                    <a href="/Feature" className="dropdown-item ">Features</a>
                                    <a href="Quote" className="dropdown-item active">Free Quote</a>
                                    <a href="Team" className="dropdown-item">Our Team</a>
                                    <a href="/Testimonial" className="dropdown-item">Testimonial</a>
                                    <a href="/404" className="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="/Contact" className="nav-item nav-link">Contact</a>
                        </div>
                        <a href="/Quote" className="btn btn-light rounded-pill text-primary py-2 px-4 ms-lg-5">Free Quote</a>
                    </div>
                </nav>

                <div className="container-xxl bg-primary page-header">
                    <div className="container text-center">
                        <h1 className="text-white animated zoomIn mb-3">Free Quote</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Free Quote</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>




            <div className="container-xxl py-6">
                <div className="container">
                    <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{ "max-width": "600px" }}>
                        <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Free Quote</div>
                        <h2 className="mb-5">Request A Free Quote</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.3s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <select className="form-select" id="floatingSelect" aria-label="Financial Consultancy">
                                                <option selected="">Financial Consultancy</option>
                                                <option value="1">Strategy Consultancy</option>
                                                <option value="2">Tax Consultancy</option>
                                            </select>
                                            <label for="floatingSelect">Select A Service</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ "height": "150px" }}></textarea>
                                            <label for="message">Comments</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Request Quote</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{ "margin-top": "6rem", }}>
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-3">
                            <h5 className="text-white mb-4">Get In Touch</h5>
                            <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h5 className="text-white mb-4">Quick Link</h5>
                            <a className="btn btn-link" href="">About Us</a>
                            <a className="btn btn-link" href="">Contact Us</a>
                            <a className="btn btn-link" href="">Privacy Policy</a>
                            <a className="btn btn-link" href="">Terms & Condition</a>
                            <a className="btn btn-link" href="">Career</a>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h5 className="text-white mb-4">Popular Link</h5>
                            <a className="btn btn-link" href="">About Us</a>
                            <a className="btn btn-link" href="">Contact Us</a>
                            <a className="btn btn-link" href="">Privacy Policy</a>
                            <a className="btn btn-link" href="">Terms & Condition</a>
                            <a className="btn btn-link" href="">Career</a>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h5 className="text-white mb-4">Newsletter</h5>
                            <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                            <div className="position-relative w-100 mt-3">
                                <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{ "height": "48px;" }} />
                                <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a className="border-bottom" href="/">RegEx</a>, All Right Reserved.


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Quote;

