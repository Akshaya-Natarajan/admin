import React from 'react'
import { Link } from 'react-router-dom'

function Otp() {
  return (
    <div>
      <div class="mask d-flex align-items-center h-100">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card">
                <div class="card-body gradient-custom-3 p-5">
                  <h2 class="text-center mb-5">Verify Code</h2>

                  <form>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example3cg">Enter 4-Digit verification code</label>
                      <input type="number" id="form3Example3cg" required class="form-control form-control-lg" />
                    </div>

                    <Link to={'/'}><button type="button" class="btn btn-success btn-block btn-lg text-body">Submit</button></Link>
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

export default Otp
