import React from 'react'

function Addnewuser() {
    return (
        <div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 shadow-lg p-4 mb-4 bg-white rounded-4 ">
                <form>
                <div class="form-outline mb-4">
                        <input type="text" id="shopname" class="form-control form-control-lg"
                            placeholder="Enter Shop Name" />
                        <label class="form-label" for="shopname">Shop Name</label>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="text" id="firstname" class="form-control form-control-lg"
                            placeholder="Enter first name"/>
                        <label class="form-label" for="firstname">First Name</label>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="text" id="lastname" class="form-control form-control-lg"
                            placeholder="Enter last name"/>
                        <label class="form-label" for="lastname">Last Name</label>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="email" id="email" class="form-control form-control-lg"
                            placeholder="Enter a valid email address"/>
                        <label class="form-label" for="form3Example3">Email address</label>
                    </div>

                    <div class="form-outline mb-3">
                        <input type="number" id="phone" class="form-control form-control-lg"
                            placeholder="Enter phone number"/>
                        <label class="form-label" for="form3Example4">Phone Number</label>
                    </div>
                    <div class="text-center text-lg-start mt-4 pt-2">
                  <button type="button" class="btn btn-primary btn-lg"
                  >Submit</button>
                  </div>
                        
                        </form>
                    </div>
           </div>
            )
}

            export default Addnewuser
