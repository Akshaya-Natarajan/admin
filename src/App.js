import './App.css';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Forgotpwd from './components/Forgotpwd';
import Otp from './components/Otp';
import Newpwd from './components/Newpwd';
import Product_info from './components/Product_info';
import Edit_product from './components/Edit_product';
import View_product from './components/View_product';
import Order from './components/Order';
import Addneworder from './components/Addneworder'
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import { useEffect, useState } from 'react';


function App() {

  let token = localStorage.getItem('myapptoken')
  
  console.log(token)
  return (
    <>
    {
      token===null?<BrowserRouter>
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/password/reset' element={<Forgotpwd />} />
                 <Route path='/OTPValidation' element={<Otp />} />
                 <Route path='/create/password' element={<Newpwd />} />
              </Routes>
        </BrowserRouter>:<BrowserRouter>
       <Topbar/>
       <div id="layoutSidenav">
         <Sidebar/>
         <div id="layoutSidenav_content">
         <main>
               <Routes>
                 <Route path='/' element={<Login />} />
                 <Route path='/dashboard' element={<Dashboard />} />
                 <Route path='/product/list' element={<Product_info />} />
                 <Route path='/edit/product' element={<Edit_product/>} />
                 <Route path='/view/product' element={<View_product />} />
                 <Route path='/order/details' element={<Order />} />
                 <Route path='/create/new/order' element={<Addneworder/>} />
   
               </Routes>
             </main>
         </div>
       </div>
             
         </BrowserRouter>
    }
      
       
      </>
  );
}

export default App;
