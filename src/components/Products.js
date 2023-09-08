import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import Productdetails from './Productdetails'
import { Link } from 'react-router-dom'
import Card from './Card'

const Homepage = ({item}) => {
  const [limit,setLimit] = useState(8)
 
  const itemstore = useSelector(Store=>Store.itemStore)
  // console.log(items)
  const items_in_store = itemstore.items
   


  return (
    <>
    <h1 className='text-center fw-bold fs-3 m-3'>Product Details</h1>
    <div className='container mx-auto mt-5 text-center'>
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 ">
     {
       items_in_store.slice(0,limit).map((individual_item,i)=> <Productdetails key = {i} item={individual_item}/>)
       
      }
      </div>
    
    </div> 
    

   


    </>
  )
}

export default Homepage