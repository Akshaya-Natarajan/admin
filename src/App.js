import './App.css';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Forgotpwd from './components/Forgotpwd';
import Otp from './components/Otp';
import Newpwd from './components/Newpwd';
import Product_info from './components/Product_info';
import Edit from './components/Edit';
import View from './components/View';
import Shopkeeper from './components/Shopkeeper';
import Addnewuser from './components/Addnewuser'


function App() {
  return (
    <div >
      <BrowserRouter>
          <main>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/register' element={<Register />} />
              <Route path='/password/reset' element={<Forgotpwd />} />
              <Route path='/OTPValidation' element={<Otp />} />
              <Route path='/create/password' element={<Newpwd />} />
              <Route path='/product/list' element={<Product_info />} />
              <Route path='/edit/product' element={<Edit />} />
              <Route path='/view/product' element={<View />} />
              <Route path='/shopkeeper' element={<Shopkeeper />} />
              <Route path='/create/new/user' element={<Addnewuser/>} />

            </Routes>
          </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
