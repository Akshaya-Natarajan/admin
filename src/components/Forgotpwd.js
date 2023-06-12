import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../images/bg.jpg'
function Forgotpwd() {
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
                  <h2 class="text-center mb-5">Enter your e-mail</h2>

                  <form>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example3cg">Email</label>
                      <input type="email" id="form3Example3cg" placeholder='Enter your E-Mail' required class="form-control form-control-sm" />
                    </div>

                    <div class="d-flex justify-content-center">
                    </div>

                    <Link to={'/OTPValidation'}><button type="button" class="btn btn-success btn-block btn-sm text-body">Send verification code</button></Link>
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

export default Forgotpwd
