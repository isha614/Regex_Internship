import React from "react";
import "./TeamMember.css";
const TeamMembers=()=>{
    return (
        <>
        <div className="container-xxl py-6">
            <div className="container">
                <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
                    <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Our Team</div>
                    <h2 className="mb-5">Meet Our Team Members</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item">
                            <h5>Full Name</h5>
                            <p className="mb-4">Designation</p>
                            <img className="img-fluid rounded-circle w-100 mb-4" src="Image/team-1.jpg" alt=""/>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-square text-primary bg-white m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square text-primary bg-white m-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square text-primary bg-white m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item">
                            <h5>Full Name</h5>
                            <p className="mb-4">Designation</p>
                            <img className="img-fluid rounded-circle w-100 mb-4" src="Image/team-2.jpg" alt=""/>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-square text-primary bg-white m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square text-primary bg-white m-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square text-primary bg-white m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item">
                            <h5>Full Name</h5>
                            <p className="mb-4">Designation</p>
                            <img className="img-fluid rounded-circle w-100 mb-4" src="Image/team-3.jpg" alt=""/>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-square text-primary bg-white m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square text-primary bg-white m-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square text-primary bg-white m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item">
                            <h5>Full Name</h5>
                            <p className="mb-4">Designation</p>
                            <img className="img-fluid rounded-circle w-100 mb-4" src="Image/team-4.jpg" alt=""/>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-square text-primary bg-white m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square text-primary bg-white m-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square text-primary bg-white m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default TeamMembers;