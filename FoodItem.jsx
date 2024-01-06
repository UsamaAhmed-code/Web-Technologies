import React from 'react'

const FoodItem = ({Image, Name, Price, Color}) => {
  return (
    <div className='col-12 col-md-4'>
      <div className='p-2'>
        <div className={`border border-light shadow-sm p-3 ${Color}`}>
           <img src={Image} className='w-100 h-75'/>
           <h3>{Name}</h3>
           <p>{Price}</p>
           <button className='btn bg-light w-100 rounded-0'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default FoodItem