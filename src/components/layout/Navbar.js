import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { useSelector } from 'react-redux'
import Productdetails from '../Productdetails'

const Navbar = () => {

  return (
    <>
    <div className='row pt-1 bg-smoke'>
        <div className='col-md-3 text-center'>
        <Link className="navbar-brand fs-4 fw-bold" to="/">HARAMI</Link>
        </div>
        <div className='col-md-6'>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-warning" type="submit" >Search</button>
      </form>
      
    
        </div>
        <div className='col-md-3 d-flex justify-content-evenly'>
            <Link to = '/signin'><i class="bi bi-box-arrow-in-right fs-4 fw-bold"></i></Link>
            <Link to = '/signup'><i class="bi bi-person-add fs-4 fw-bold"></i></Link>
            <Link to = '/cart'><i class="bi bi-cart fs-4 fw-bold"></i></Link>
        </div>

    </div>



    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blogs">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
    
  

export default Navbar