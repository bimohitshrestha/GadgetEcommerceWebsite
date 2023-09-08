import React from 'react'
import Navbar from '../layout/Navbar'
import { Footer } from '../layout/Footer'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <>
      <Navbar />

      <main className="form-signin w-50 mx-auto my-5 shadow-lg p-5">
        <form>
          <img className="mb-4" src="./images/harami.jpg" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          Do not have an account?<Link to='/signup'>Register</Link>
          <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
        </form>
      </main>


      <Footer />

    </>
  )
}

export default Signin