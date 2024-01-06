import React from "react";
import Products from "./Products";
import I1 from "../assets/Images/Butter-chicken.png";
import I2 from "../assets/Images/small.png";
import I3 from "../assets/Images/chicken-biryani.png";
import I4 from "../assets/Images/burger.png";
const Healthy = () => {
  return (
    <div className="container-fluid px-4 py-5 Tasty">
      <h2 className="text-center display-4  fw-bold">It's All About Taste</h2>
      <div className="container mt-5">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <Products
            Image={I1}
            I2={I2}
            Title="Butter Chicken"
            Description="Chicken cooked with tommatoes, Curd, Fresh Cream and some special spice served with Garlic Naan"
          />

          <Products
            Image={I3}
            I2={I2}
            Title="Chicken Briyani"
            Description="Chicken cokked with Onions, tomatoes, spices and special Briyani Masala and Then mixed with colored rice  "
          />

          <Products
            Image={I4}
            I2={I2}
            Title="Chicken Buger"
            Description="Grilled Chicken with Letuces, onions, mayo ,chipotle and ranch and served with Fries"
          />
        </div>
      </div>
    </div>
  );
};

export default Healthy;
