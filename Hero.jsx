import React from "react";
import logo from "../assets/Images/Indian-Food-PNG-Photos.png";

const Hero = () => {
  return (
    <div className="container-fluid col-xxl-8 px-4 py-5 hero-container">
      <div className="row flex-lg-row-reverse align-items-center g-5">
        <div className="col-12 col-sm-10 col-lg-6">
          <img
            src={logo}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6 py-5 hero-text">
          <h1 className="display-5 fw-bold lh-1 mb-3">When Mom Don't Cook</h1>
          <p className="lead">
            Order Food Express <br /> Your BestFriend in hunger
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-light btn-lg px-4 me-md-2">
              Menu
            </button>
            <button type="button" className="btn btn-dark btn-lg px-4">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
