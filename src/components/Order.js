import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import bg from '../images/bg.jpg'

function Order() {
    const [OrderList, setOrderList] = useState([]);

    const [order, setOrder] = useState({
        order_number: '',
        fname: '',
        lname: '',
        phone: '',
        email: '',
        order:''
    });
    const fetchOrderList = async () => {
        const res = await axios.get('http://localhost:8000/create/new/customer',order);
        console.log(res)
        if(res.data.status===1){
          setOrderList(res.data.response)
        } 
      };
        useEffect(() => {
        fetchOrderList();
      }, []);


      let navigate =useNavigate()

      const checkToken =()=>{
        let token = localStorage.getItem('myapptoken')
        if(!token){
          navigate('/')
        }
      }
    
      useEffect(()=>{
        checkToken()
      },[])



      return (
            <>
            <div className='has-bg-img z-0 position-relative'>
            <img className='bg-img bg-image-ripple' data-mdb-ripple-color="light" src={bg}/>

            <div className='container top-0 mt-5  z-1 position-absolute'>
              
                    {/* card1 */}
                    <div class="row m-auto text-center justify-content-center">
                        <div class="col-sm-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">TOTAL SALES</h5>
                                    <a href="#" class="btn btn-primary">View</a>
                                </div>
                            </div>
                        </div>
                        {/* card2 */}
                        <div class="col-sm-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">TOTAL SHOPKEEPERS</h5>
                                    <a href="#" class="btn btn-primary">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* table */}
                <div className='m-4 d-flex justify-content-end'>
                <Link to={'/create/new/order'}><button className='btn btn-dark text-light'>+Add new Order</button></Link>
                </div>
                <table class="table table-bordered table-hover">
          <thead>
            <tr>
              
              <th>ORDER NUMBER</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>PHONE NUMBER</th>
              <th>EMAIL</th>
              <th>ORDER DETAILS</th>
            </tr>
          </thead>
          <tbody>
            {OrderList.map((order) => {
              return (
                <tr>
                  <td>{order.order_number}</td>
                  <td>{order.first_name}</td>
                  <td>{order.last_name}</td>
                  <td>{order.phone_number}</td>
                  <td>{order.email}</td>
                  <td>{order.order}</td>               

                  <td>                  
                    <i
                      class="fa fa-eye m-1 p-2"
                      style={{ cursor: 'pointer' }}
                      aria-hidden="true"
                    ></i>
                    <i
                      class="fa fa-pencil m-1 p-1"
                      style={{ cursor: 'pointer' }}
                      aria-hidden="true"
                    ></i>
                    <i
                      class="fa fa-trash m-1 p-1"
                      style={{ cursor: 'pointer' }}
                      aria-hidden="true"
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
     </div>
            </div>
           
   </>
  )
}

export default Order
