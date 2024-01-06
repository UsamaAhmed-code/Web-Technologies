import React from 'react'
import Img1 from '../assets/Images/mutton.png';
import Img2 from '../assets/Images/Butter-chicken.png';
import Img3 from '../assets/Images/chicken-biryani.png';
import Img4 from '../assets/Images/Paneer-Tikka.png';
import FoodItem from './FoodItem';
const Food = () => {
  return (
    <div className='container py-5'>
        <div className='d-flex justify-content-between'>
            <h3 className='food-text'>Most Famous</h3>
            <button className='btn btn-transparent fw-bold px-3 rounded-0 border border-success'>All Dishes</button> 
        </div>
        <div className='row mt-5'>
            <FoodItem 
            Image = {Img1}
            Name = "Mutton Karahi"
            Price = "$17.5"
            Color = "p1Color"
            />
            <FoodItem 
            Image = {Img2}
            Name = "Butter Chicken"
            Price = "$15.5"
            Color = "p2Color"
            />
            <FoodItem 
            Image = {Img3}
            Name = "Chicken Briyani"
            Price = "$15"
            Color = "p3Color"
            />
            <div className='col-12 col-md-8'>
                <div className='p-1'>
                    <div className='border shadow-sm d-flex p4color'>
                    <div className='text-center px-0 px-lg-5'>    
                     <img src={Img4} className='p-Image'/></div>
                    <div className='d-flex flex-column justify-content-center'>
                    <h3>Special Paneer Tikka</h3>
                    <p>$18</p>
                    <button className='btn bg-white w-100 rounded-0'>Add To Cart</button>
                </div> 
            </div>
            </div>
        </div>
        <div className='col-12 col-md-4'>
      <div className='p-2'>
        <div className='border border-light shadow-sm py-3 px-3 p5color'>
           
           <h3> Make your own Pizza with Any number of Toppings</h3>
           <p>$13</p>
           <button className='btn bg-light w-100 rounded-0'>Add to Cart</button>
        </div>
      </div>
    </div>
        </div>  
    </div>

  )
}

export default Food