import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';


function Edit() {

    //object for saving the data 
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        code: '',
        name: '',
        price: '',
        amount: '',
        quantity: '',
    });

    //handleChange declaration

    const handleChange = (e) => {
        // console.log(e.target.id, e.target.value)

        setProduct((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        // e-> event, target.id-> id of the input tag , target.value-> value entered in input tag
    };

    // toast options

    const toastoption = {
        duration: 3000,
        position: 'bottom-right',
        style: {
            color: '#fff',
            background: '#000',
        },
    };

    //handleSubmit declaration

    const handleSubmit = async () => {


        if (product.name === '') {
            toast.error('Enter product name', toastoption);
            return;
        }
        if (product.price === '') {
            toast.error('Enter actual price', toastoption);
            return;
        }
        if (product.quantity === '') {
            toast.error('Enter product quantity', toastoption);
            return;
        }
        console.log(product);
        const res = await axios.post(
            'http://localhost:7000/create/new/cracker',
            product
        );
        console.log(res);
        if (res.data.status === 1) {
            toast.success(res.data.mesaage)
            setTimeout(() => {
                navigate('/product/list')
            })
        }

    }


    return (
        <div>
            <Navbar/>
            <div className='container-fluid m-auto'>
                <div className='container p-5 border-1 rounded-4'>
                    <form>

                        <div className=' form-outline row mb-4'>
                            <div className='col col-2'>
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="quantity">CODE</label>
                                    <input type="number" id="code" placeholder='product code' class="form-control form-control-lg" onChange={(e) => handleChange(e)} />
                                </div>
                            </div>

                            <div className='col col-6'>
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="quantity">PRODUCT NAME</label>
                                    <input type="text" id="name" placeholder='name of the product' required class="form-control form-control-lg" onChange={(e) => handleChange(e)} />
                                </div>
                            </div>

                            <div className='col col-2'>
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="quantity">CONTENT</label>
                                    <input type="text" placeholder='1 Pkt' disabled class="form-control form-control-lg" />
                                </div>
                            </div>
                        </div>
                        <div className='form-outline row mb-4'>
                            <div className='col col-2'>
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="quantity">ACTUAL PRICE</label>
                                    <input type="number" id="price" placeholder='Actual Price' class="form-control form-control-lg" onChange={(e) => handleChange(e)} />
                                </div>
                            </div>

                            <div className='col col-2'>
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="quantity">AMOUNT</label>
                                    <input type="number" id="amount" placeholder='Amount' class="form-control form-control-lg" onChange={(e) => handleChange(e)} />
                                </div>
                            </div>
                            <div className='col col-2'>
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="quantity">QUANTITY</label>
                                    <input type="number" id="quantity" placeholder='Quantity' class="form-control form-control-lg" onChange={(e) => handleChange(e)} />
                                </div>
                            </div>

                        </div>

                        <div class="d-flex justify-content-center">
                            <button type="button" class="btn btn-success btn-block btn-lg text-body" onClick={handleSubmit}>Create </button>
                            <Toaster />
                        </div>

                    </form>

                </div>
            </div>
        </div >
    )
}

export default Edit
