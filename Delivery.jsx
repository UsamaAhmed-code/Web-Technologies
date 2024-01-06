import React from "react";
import p1 from "../assets/Images/fast-food-menu.png";
import p2 from "../assets/Images/delivery.png";
import p3 from "../assets/Images/Eating.png";

const Delivery = () => {
  return (
    <div className="container-fluid px-4 py-5 md-1 delivery-process">
      <h2 className="text-center display-4  fw-bold">How Delivery Works</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div className="col-lg-4 px-5 text-center">
          <img src={p1} className="w-50 h-50" />
          <h5>Pick Your Food</h5>
          <p>
            Select and Order Whatever you want to eat. After all, It's all about
            food.
          </p>
        </div>
        <div className="col-lg-4 px-5 text-center">
          <img src={p2} className="w-50 h-50" />
          <h5>We Deliver the Food</h5>
          <p>
            We prepare the food with full of Taste and Love. Then Deliver it
            with full safety.
          </p>
        </div>
        <div className="col-lg-4 px-5 text-center">
          <img src={p3} className="w-50 h-50" />
          <h5>You Enjoy Your Meal</h5>
          <p>
            Here is Your food. With the First bit of it, you will feel the
            Heaven. Enjoy your food.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
