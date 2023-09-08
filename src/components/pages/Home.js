import React, {useEffect,useState} from 'react'
import Navbar from '../layout/Navbar'
import { Footer } from '../layout/Footer'
import Carousel from '../Carousel'

import {useSelector} from 'react-redux'
import Products from '../Products'





const Home = () => {
  



  return (
    <>
    <Navbar/>
    <Carousel/>
    <Products/>
  

   




    <Footer/>
    </>
  )
}

export default Home