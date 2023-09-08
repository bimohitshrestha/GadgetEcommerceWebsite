import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'
import Navbar from '../layout/Navbar'
import { Footer } from '../layout/Footer'

const Homepage = () => {
  const [limit,setLimit] = useState(8)
  const[search,setSearch] = useState('')
    const itemstore = useSelector(Store=>Store.itemStore)
   // console.log(items)
   const items_in_store = itemstore.items
   const filteredItems = itemstore.items


  return (
    <>
    <Navbar/>
    <div className='container mx-auto mt-5 text-center'>
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
     {
       //items_in_store.slice(0,limit).map((individual_item,i)=> <Card key = {i} item={individual_item}/>)
       filteredItems.slice(0,limit).map((individual_item,i)=> <Card key = {i} item={individual_item}/>)
      }
      </div>
      {
        limit<filteredItems.length ?
        <button className='btn btn-success m-3' onClick={()=>setLimit(limit+4)}>Show More</button>
        :
        <h4>No more items.</h4>
      }
        
    </div> 

    <Footer/>


    </>
  )
}

export default Homepage