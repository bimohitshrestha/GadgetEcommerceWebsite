import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Signin from './components/pages/Signin'
import Signup from './components/pages/Signup'
import Cart from './components/pages/Cart'


import Blogs from './components/pages/Blogs'

import Contact from './components/pages/Contact'

import Homepage from './components/pages/Homepage'
import Productdetails from './components/Productdetails'
import About from './components/pages/About'


const MyRoutes = () => {
  return (
    <>
    
    <Router>
        <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path= '/product/:id' element={<Productdetails/>} />
            {/*Material Pages*/}
            <Route path='/product' element={<Homepage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/contact' element={<Contact/>}/>
            
        </Routes>
    </Router>
    
    </>
  )
}

export default MyRoutes