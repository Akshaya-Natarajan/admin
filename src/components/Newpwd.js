import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../images/bg.jpg'

function Newpwd() {
  return (
    <div>
                  <div className='has-bg-img z-0 position-relative'>
            <img className='bg-img bg-image-ripple' data-mdb-ripple-color="light" src={bg}/>
      <div class="mask d-flex align-items-center z-1 position-absolute h-100">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card">
                <div class="card-body gradient-custom-3 p-5">
                  <h2 class="text-center mb-5">Create a New Password</h2>

                  <form>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4cg">Current Password</label>
                      <input type="password" placeholder='Enter Current Password' id="form3Example4cg" class="form-control form-control-sm" />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4cg">New Password</label>
                      <input type="password" placeholder='Enter New Password' id="form3Example4cg" class="form-control form-control-sm" />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4cdg">Confirm New Password</label>
                      <input type="password" id="form3Example4cdg" class="form-control form-control-sm" />
                    </div>

                    <div class="d-flex justify-content-center">
                      <button type="button" class="btn btn-Primary btn-block btn-sm text-body">Submit</button>
                    </div>
                    <div>
                      <p class="text-center lb small fw-bold mt-2 pt-1 mb-0">Already have an account?
                        <Link to={'/'}><a href="#!" class="link-danger">Login</a></Link></p>
                    </div>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
    </div>
  )
}

export default Newpwd
