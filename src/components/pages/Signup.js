import React from 'react'
import Navbar from '../layout/Navbar'
import { Footer } from '../layout/Footer'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <Navbar />
      <main className="form-signin w-50 mx-auto my-5 shadow-lg p-5">
        <form>
          <img className="mb-4" src="./images/harami.jpg" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Register</h1>

          <div className="form-floating mb-2">
            <input type="text" className="form-control" id="firstname" placeholder="First name here " />
            <label for="firstname">First Name</label>
          </div>

          <div className="form-floating mb-2">
            <input type="text" className="form-control" id="lastname" placeholder="Last name here " />
            <label for="lastname">Last Name</label>
          </div>

          <div className="form-floating mb-2">
            <input type="date" className="form-control" id="dob" placeholder="date of birth " />
            <label for="dob">Date of Birth</label>
          </div>


          <div className='d-flex form-control mb-2'>
            <label>Gender</label>
            <div className="form-check">
              <input className="form-check-input mt-1 me-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" for="flexRadioDefault1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input mt-1 me-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label className="form-check-label" for="flexRadioDefault2">
                Female
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input mt-1 me-1" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
              <label className="form-check-label" for="flexRadioDefault3">
                Others
              </label>
            </div>
          </div>



          <div className="form-floating mb-2">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-2">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="form-floating mb-2">
            <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password" />
            <label for="floatingConfirmPassword">Confirm Password</label>
          </div>


          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> I agree to the terms and conditions.
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
          Already have an account.<Link to='/signin'> Sign in</Link>
          <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
        </form>
      </main>


      <Footer />

    </>
  )
}

export default Signup