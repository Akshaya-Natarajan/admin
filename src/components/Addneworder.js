import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'


function Addneworder() {

    let navigate = useNavigate()

    const checkToken = () => {
        let token = localStorage.getItem('myapptoken')
        if (!token) {
            navigate('/')
        }
    }

    useEffect(() => {
        checkToken()
    }, [])





    return (
        <div>
            <div class="container  m-auto w-75 rounded-4 mt-5">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-9 col-lg-7 col-xl-6 p-5 shadow-lg rounded-4">


                        <form>
                            <div className='row'>
                                <div class="form-outline col mb-4">
                                    <label class="form-label" for="shopname">Shop Name</label>
                                    <input type="text" id="shopname" class="form-control form-control-sm"
                                        placeholder="Enter Shop Name" />
                                </div>
                                <div class="form-outline col mb-4">
                                    <label class="form-label" for="firstname">First Name</label>
                                    <input type="text" id="firstname" class="form-control form-control-sm"
                                        placeholder="Enter first name" />
                                </div>
                            </div>
                            <div className='row'>
                                <div class="form-outline col mb-4">
                                    <label class="form-label" for="lastname">Last Name</label>
                                    <input type="text" id="lastname" class="form-control form-control-sm"
                                        placeholder="Enter last name" />
                                </div>
                                <div class="form-outline col mb-4">
                                    <label class="form-label" for="form3Example3">Email address</label>
                                    <input type="email" id="email" class="form-control form-control-sm"
                                        placeholder="Enter a valid email address" />
                                </div>
                            </div>

                            <div class="form-outline mb-3">
                                <label class="form-label" for="form3Example4">Phone Number</label>
                                <input type="number" id="phone" class="form-control form-control-sm"
                                    placeholder="Enter phone number" />
                            </div>
                           <div className='d-flex'>
                           <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="button" class="btn btn-outline-success btn-sm"
                                >Submit</button>
                            </div>
                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="button" class="btn btn-outline-danger btn-sm"
                                >Cancel</button>
                            </div>
                           </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addneworder
