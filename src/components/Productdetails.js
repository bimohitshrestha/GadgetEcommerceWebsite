import React from 'react'
import { useDispatch } from 'react-redux';

const Productdetails = ({item}) => {
    
    
  return (
    <>
   
         <div class="col">
    <div class="card">
      <img src={item.image} class="card-img-top" alt="..." style={{height:"250px"}}/>
      <div className="product-details">
          <p><b>ID:</b> {item.id}</p>
          <p><b>Price:</b> ${item.price}</p>
          <p><b>Description:</b></p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
           </p>
           
        </div>
       

      </div>
  </div>


    </>
  )
}

export default Productdetails