import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

function Shopkeeper() {
    const [UserList, setUserList] = useState([]);

    const [user, setUser] = useState({
        sname: '',
        fname: '',
        lname: '',
        phone: '',
        email: '',
    });
    const fetchUserList = async () => {
        const res = await axios.get(
          'http://localhost:7000/get/all/Users'
        );
        console.log(res)
        if(res.data.status===1){
          setUserList(res.data.response)
        } 
      };
        useEffect(() => {
        fetchUserList();
      }, []);

    return (
        <>
            <Navbar />
            <div className='container m-auto p-5'>
                <div className='container-fluid m-auto'>
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
                <Link to={'/create/new/user'}><button className='btn btn-dark text-light'>+Add new Shopkeeper</button></Link>
                </div>
                <table class="table table-bordered table-hover">
          <thead>
            <tr>
              
              <th>SHOP NAME</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>PHONE NUMBER</th>
              <th>EMAIL</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {UserList.map((user) => {
              return (
                <tr>
                  <td>{user.shop_name}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.phone_number}</td>
                  <td>{user.email}</td>               

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

export default Shopkeeper
