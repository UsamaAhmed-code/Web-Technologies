import React from 'react'

const SProduct = ({Image, Title, Description}) => {
  return (
 
    <div class="card shadow-sm">
      <img src={Image} alt="" style={{height: "200px"}}/>
      <div class="card-body">
       
        
       <p>
        <strong>{Title}</strong>
        <p>{Description}</p>
       </p>
      </div>
    </div>
   
  )
}

export default SProduct