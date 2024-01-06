import React from "react";
import logo from "../assets/Images/food-logo.png";
const Footer = () => {
  return (
    <div className="footer py-3">
      <div className="d-flex flex-column justify-column-center align-items-center pt-3">
        <i className="bi bi-envelope display-3 text-white"></i>
        <h3 className="text-light mt-3">Our Each bite is Full of Love</h3>
        <h5 className="text-light fst-italic mt-2">Suscribe the News Letter</h5>
        <div class="input-group mb-3 mt-4 w-50">
          <input
            type="text"
            class="form-control p-2 "
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />

          <button class="btn btn-warning px-4" type="button">
            Subscribe
          </button>
        </div>
      </div>

      <div class="container">
        <footer class="py-5">
          <div class="row row-cols-2 row-cols-md-4 text-white">
            <div class="d-flex align-items-center">
              <img src={logo} className="w-75 h-75"></img>
            </div>

            <div class="">
              <h5>About</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-white">
                    About Us
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-white">
                    Certificate
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-white">
                    Mission
                  </a>
                </li>
              </ul>
            </div>

            <div class="">
              <h5>Food</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-white">
                    Menu
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-white">
                    Famous Dishes
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-white">
                    Special Dishes
                  </a>
                </li>
              </ul>
            </div>

            <div class="">
              <h5>Contact</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-white">
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    <span>St.Louis, Missouri, USA</span>
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-white">
                    <i className="bi bi-envelope-at me-2"></i>
                    <span>FoodExpress@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="d-flex justify-content-between py-4 my-4 border-top">
            <p className="text-white">
              &copy; 2023 Food Express, Inc. All rights reserved.
            </p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3">
                <a class="link-dark" href="#">
                  <i className="bi bi-facebook text-white" />
                </a>
              </li>
              <li class="ms-3">
                <a class="link-dark" href="#">
                  <i className="bi bi-instagram text-white" />
                </a>
              </li>
              <li class="ms-3">
                <a class="link-dark" href="#">
                  <i className="bi bi-twitter text-white" />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
