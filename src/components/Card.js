import React from 'react'
import { useDispatch } from 'react-redux'



const Card = ({item}) => {
  const dispatch = useDispatch()
  //console.log(item)
  return (
    <>
  
    <div class="col">
    <div class="card">
      <img src={item.image} class="card-img-top" alt="..." style={{height:"250px"}}/>
      <div class="card-body text-center">
        <h5 class="card-title text-truncate" title={item.name}> {item.name} </h5>
        <h6 className='card-title'>{item.price}</h6>
        <p class="card-text text-truncate" title={item.description} style={{height:"25px"}}>{item.description}</p>

        <button className='btn btn-warning' onClick={()=>dispatch({type:"ADD_TO_CART",payload:item
        })}>Add to Cart</button>
      </div>
    </div>
  </div>


    
    </>
  )
}

export default Card