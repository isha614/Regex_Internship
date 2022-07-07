import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";

const Quote = () => {
  return (
    <>
        <NavBar />
        <Banner title="Free Quote" submenu="Free Quote" />

        {/* Quote Start */}
        <div className="container">
          <div
            className="mx-auto text-center wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">
              Free Quote
            </div>
            <h2 className="mb-5">Request A Free Quote</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.3s">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <select
                        className="form-select"
                        id="floatingSelect"
                        aria-label="Financial Consultancy"
                      >
                        <option defaultValue>Financial Consultancy</option>
                        <option value="1">Strategy Consultancy</option>
                        <option value="2">Tax Consultancy</option>
                      </select>
                      <label htmlFor="floatingSelect">Select A Service</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: 150 }}
                      ></textarea>
                      <label htmlFor="message">Comments</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Quote End */}

        <Footer />
      
    </>
  );
};

export default Quote;
