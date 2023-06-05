import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import swal from 'sweetalert';
import Navbar from './Navbar';

function Product_info() {

  const [productList, setProductList] = useState([]);
  const [modal, setModal] = useState(false);
  const [editId, setEditId] = useState('');
  const [editDetails, setEditDetails] = useState({});

  const fetchProductList = async () => {
    const res = await axios.get(
      'http://localhost:7000/get/all/crackers'
    );
    
    if(res.data.status===1){
      setProductList(res.data.response)
    }
    
   
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  const modelOpen = (id) => {
    setModal(!modal);
    setEditId(id);
  };

  const closeToggle = () => {
    setModal(!modal);
  };

  const handleDelete = async (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this Product Details!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://643e2bbb6c30feced82167e9.mockapi.io/product/${id}`)
          .then(() => {
            fetchProductList();
          });
        toast.success('deleted SuccessFully');
      } else {
        swal('Your  file is safe!');
      }
    });
  };

  const fetchEditDetails = async () => {
    const res = await axios.get(
      `https://643e2bbb6c30feced82167e9.mockapi.io/product/${editId}`
    );
    if(res.status)
    setEditDetails(res.data);
  };

  useEffect(() => {
    if (editId !== '') {
      fetchEditDetails();
    }
  }, [editId]);

  const handleChange = (e) => {
    // console.log(e.target.id)
    // console.log(e.target.id,e.target.value)
    setEditDetails((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleEditUpdate = async () => {
    const res = await axios.put(
      `https://643e2bbb6c30feced82167e9.mockapi.io/product/${editId}`,
      editDetails
    );
    if (res.status === 200) {
      closeToggle();
      toast.success('Updated');
      fetchProductList();
    }
  };
  return (
    <div>
      <Navbar/>
      <div class="container mt-3 p-5">
      <div className='conatiner-fluid m-auto'>
        <h2>PRODUCT INFO</h2>
        <p>Current product list</p>
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>CODE</th>
              <th>PRODUCT NAME</th>
              <th>CONTENT</th>
              <th>ACTUAL PRICE</th>
              <th>AMOUNT</th>
              <th>QUANTITY</th>
              <th><Link to={'/edit/product'}><button className='btn btn-dark text-light'>+Add new Product</button></Link></th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product, i) => {
              return (
                <tr>
                  <td>{product.code}</td>
                  <td>{product.name}</td>
                  <td>{product.content}</td>
                  <td>{product.price}</td>
                  <td>{product.amount}</td>
                  <td>{product.quantity}</td>

                  <td>
                    <Link to={'/view/product'}>
                      <i
                        class="fa fa-eye m-1 p-2"
                        style={{ cursor: 'pointer' }}
                        aria-hidden="true"
                      ></i>
                    </Link>
                    <i
                      class="fa fa-pencil m-1 p-1"
                      style={{ cursor: 'pointer' }}
                      aria-hidden="true"
                      onClick={() => modelOpen(product.id)}
                    ></i>
                    <i
                      class="fa fa-trash m-1 p-1"
                      style={{ cursor: 'pointer' }}
                      aria-hidden="true"
                      onClick={() => handleDelete(product.id)}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>
      <Toaster />
      <Modal isOpen={modal} toggle={closeToggle} centered size="lg">
        <ModalHeader>Edit Product Detail</ModalHeader>
        <ModalBody>
          <div className="container">
            <div className="row  mt-4">
              <div className="col-6">
                <div class="mb-3">
                  <label class="form-label" for="quantity">PRODUCT CODE</label>
                  <input
                    type="number"
                    class="form-control"
                    id="code"
                    aria-describedby="emailHelp"
                    placeholder="Product Code"
                    value={editDetails.code}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <label class="form-label" for="quantity">PRODUCT NAME</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Product Name"
                    value={editDetails.name}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <label class="form-label" for="quantity">CONTENT</label>
                  <input
                    type="text"
                    class="form-control"
                    id="content"
                    aria-describedby="emailHelp"
                    placeholder="1 Pkt"
                    value={editDetails.content}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <label class="form-label" for="quantity">ACTUAL PRICE</label>
                  <input
                    type="number"
                    class="form-control"
                    id="place"
                    aria-describedby="emailHelp"
                    placeholder="Actual Price"
                    value={editDetails.price}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <label class="form-label" for="quantity">PRICE</label>
                  <input
                    type="number"
                    class="form-control"
                    id="place"
                    aria-describedby="emailHelp"
                    placeholder="Amount"
                    value={editDetails.amount}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <label class="form-label" for="quantity">QUANTITY</label>
                  <input
                    type="number"
                    class="form-control"
                    id="place"
                    aria-describedby="emailHelp"
                    placeholder="quantity"
                    value={editDetails.quantity}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </div>
            <button
              className=" btn btn-sm btn-primary"
              onClick={handleEditUpdate}>Update
            </button>
            <button
              className=" btn btn-sm btn-danger">Cancel
            </button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default Product_info
