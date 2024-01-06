import React from "react";
import logo from "../assets/Images/food-logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  return (
    <div class="container-fluid px-5 header ">
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3  border-bottom border-dark header-fixed">
        <a
          href="/"
          class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <svg
            class="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          >
            <use xlink:href="#bootstrap" />
          </svg>
          <a>
            <img src={logo} className="logo" />
          </a>
        </a>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" class="nav-link px-2 menu-color">
              Home
            </a>
          </li>

          <li>
            <a href="#" class="nav-link px-2 menu-color">
              Menu
            </a>
          </li>
          <li>
            <a href="#" class="nav-link px-2 menu-color">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" class="nav-link px-2 menu-color">
              About
            </a>
          </li>
        </ul>

        <div class="col-md-3 text-end">
          <i className="bi bi-search me-4"></i>
          <i className="bi bi-cart "></i>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
