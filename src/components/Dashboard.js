import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bg from '../images/bg.jpg'
function Dashboard() {
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

    <>
                <div className='has-bg-img z-0 position-relative'>
            <img className='bg-img bg-image-ripple' data-mdb-ripple-color="light" src={bg}/>
    
      <div className='container z-1 position-absolute top-0 mt-5'>

        {/* card1 */}

        <div class="row m-auto">
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">CUSTOMER INFO</h5>
                <p>customer information including mail, contact numbers and address</p>
                <a href="#" class="btn btn-primary">View</a>
              </div>
            </div>
          </div>

          {/* card2 */}

          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">ORDER INFO</h5>
                <p>order information including confirmation mail, update and delivery</p>
                <a href="#" class="btn btn-primary">View</a>
              </div>
            </div>
          </div>

          {/* card3 */}

          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title ">PRODUCT INFO</h5>
                <p>product informations including product stock,price and dealers</p>
                <Link to={'/product/list'}> <a href="#" class="btn btn-primary">View</a></Link>
              </div>
            </div>
          </div>

          {/* card4 */}

          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title ">SALES INFO</h5>
                <p>sales informations including order history,transactions and profit</p>
                <a href="#" class="btn btn-primary">View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>

  )
}

export default Dashboard
