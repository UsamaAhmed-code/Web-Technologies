import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import F1 from "../assets/Images/tikka.png";
import F2 from "../assets/Images/wrap.png";
import F3 from "../assets/Images/kebabs.png";
import F4 from "../assets/Images/pizza-stock.png";
import F5 from "../assets/Images/Paneer-Tikka.png";
import F6 from "../assets/Images/Club-Sandwich-9.png";
import F7 from "../assets/Images/dal.png";
import SProduct from "./SProduct";

const MenuSlider = () => {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider" py-5>
      <h1 className="text-center display-4  fw-bold text-color">
        We put the Love in your food <br /> Food For Life{" "}
      </h1>
      <div className="container mt-5">
        <Slider {...settings}>
          <div className="p-1">
            <SProduct
              Image={F1}
              Title="Chicken Tikka"
              Description="Chicken cooked on coal with lot of spice served with mint curd"
            />
          </div>
          <div className="p-1">
            <SProduct
              Image={F2}
              Title="Wrap"
              Description="Spinach Wrap with Bufflo chicken and lot of sacues served with fries"
            />
          </div>
          <div className="p-1">
            <SProduct
              Image={F3}
              Title="Kebabs"
              Description="Grounded Chicken mixed with spices with served with rice and onions"
            />
          </div>
          <div className="p-1">
            <SProduct
              Image={F4}
              Title="pizza"
              Description="Cheese pizza with topping of olives, mashrooms, served with dip sauce"
            />
          </div>
          <div className="p-1">
            <SProduct
              Image={F5}
              Title="Panner"
              Description="Panner cubes cooked on coal with lot of spice served with mint curd"
            />
          </div>
          <div className="p-1">
            <SProduct
              Image={F6}
              Title="Clud Sandwich"
              Description="Taxes toast with chicken layer cheese served with fries"
            />
          </div>
          <div className="p-1">
            <SProduct
              Image={F7}
              Title="Dal Makhni"
              Description="Moong Dal cooked  with lot of spice served with butter naan and rice"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MenuSlider;
