import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>
      <div class="mask d-flex align-items-center h-100">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card">
                <div class="card-body gradient-custom-3 p-5">
                  <h2 class="text-center mb-5">Sign Up To Create an account</h2>

                  <form>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example1cg">Name</label>
                    <input type="text" id="form3Example1cg" placeholder='Enter your Name' class="form-control form-control-lg" />
                    </div>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example1cg">Phone Number</label>
                    <input type="number" id="form3Example1cg" placeholder='Enter your Phone Number' required class="form-control form-control-lg" />
                    </div>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3cg">Email</label>
                    <input type="email" id="form3Example3cg" placeholder='Enter your E-Mail' required class="form-control form-control-lg" />
                    </div>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example4cg">Password</label>
                    <input type="password" placeholder='Enter Password' id="form3Example4cg" class="form-control form-control-lg" />
                    </div>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example4cdg">Re-enterpassword</label>
                    <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                    </div>

                    <div class="d-flex justify-content-center">
                      <button type="button"class="btn btn-success btn-block btn-lg text-body">Register</button>
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
  )
}

export default Register
