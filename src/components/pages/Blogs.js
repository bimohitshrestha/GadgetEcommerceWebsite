import React from 'react'
import Navbar from '../layout/Navbar'
import { Footer } from '../layout/Footer'
import { Box, Container, Typography } from '@mui/material'

const Blogs = () => {
  return (
    <>

      <Navbar />
      <div className='container mx-auto mt-4 ' >
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card" >
              <img src="./images/mobile1.jpg" class="card-img-top" alt="..." style={{ height: "250px" }} />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://static-01.daraz.com.np/p/bc3147d8ba96437c5c79fbe2bad0d3e4.jpg" class="card-img-top" alt="..." style={{ height: "250px" }} />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://s.alicdn.com/@sc04/kf/Hb48e339acad54a0393e062f6abb04e12s.jpg_300x300.jpg" class="card-img-top" alt="..." style={{ height: "250px" }} />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="./images/mobile5.jpg" class="card-img-top" alt="..." style={{ height: "250px" }} />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src="./images/mobile6.jpg" class="card-img-top" alt="..." style={{ height: "250px" }} />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src="https://static-01.daraz.com.np/p/1f3df0dd8d7126194706eadaa09c7aae.jpg" class="card-img-top" alt="..." style={{ height: "250px" }} />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>


      </div>
      <Footer />


    </>
  )
}

export default Blogs