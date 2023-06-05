import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function View() {
  let params = useParams();
  const [product, setProduct] = useState({});
  console.log(params.id);

  const fetchProductList = async () => {
    const res = await axios.get(
      `https://643e2bbb6c30feced82167e9.mockapi.io/product/${params.id}`
    );

    setProduct(res.data);
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  return (
<>
<Navbar/>
<div className="container">
      <div class="card" style={{ width: '18rem' }}>
        <img src={product.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Product Details</h5>
          <h5>PRODUCT CODE : {product.code}</h5>
          <h5>PRODUCT NAME : {product.name}</h5>
          <h5>ACTUAL PRICE : {product.price}</h5>
          <h5>AMOUNT : {product.amount}</h5>
          <h5>QUANTITY : {product.quantity}</h5>
          <Link to={'/product/list'}><a href="#" class="btn btn-primary">Back </a></Link>
        </div>
      </div>
    </div>
</>
   
  );
}


export default View
