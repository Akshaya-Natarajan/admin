import axios from 'axios';
import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function Edit_product() {

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

    //object for saving the data 

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
            product, { headers: { Authorization: localStorage.getItem('myapptoken') } }
        );
        console.log(res);
        if (res.data.status === 1) {
            toast.success(res.data.mesaage)
            setTimeout(() => {
                navigate('/product/list')
            })
        }
        if (res.data.status === 0) {
            toast.error(res.data.message)
        }

    }


    return (
        <div>
            <div className='container m-auto w-75 rounded-4 mt-5'>
                <form>

                    <div className=' form-outline row mb-4 fw-3'>
                        <div className='col-6'>
                            <div class="form-outline mb-4">
                                <label class="form-label" for="quantity">Product Name</label>
                                <input type="text" id="name" placeholder='name of the product' required class="form-control form-control-sm" onChange={(e) => handleChange(e)} />
                            </div>
                        </div>

                        {/* <div className=' col-2'>
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="quantity">CONTENT</label>
                                    <input type="text" placeholder='1 Pkt' disabled class="form-control form-control-lg" />
                                </div>
                            </div> */}
                    </div>
                    <div className='form-outline row mb-4'>
                        <div className=' col-2'>
                            <div class="form-outline mb-4">
                                <label class="form-label" for="quantity">Actual Price</label>
                                <input type="number" id="price" placeholder='Actual Price' class="form-control form-control-sm" onChange={(e) => handleChange(e)} />
                            </div>
                        </div>

                        <div className=' col-2'>
                            <div class="form-outline mb-4">
                                <label class="form-label" for="quantity">Amount</label>
                                <input type="number" id="amount" placeholder='Amount' class="form-control form-control-sm" onChange={(e) => handleChange(e)} />
                            </div>
                        </div>
                        <div className=' col-2'>
                            <div class="form-outline mb-4">
                                <label class="form-label" for="quantity">Quantity</label>
                                <input type="number" id="quantity" placeholder='Quantity' class="form-control form-control-sm" onChange={(e) => handleChange(e)} />
                            </div>
                        </div>

                    </div>

                    <div class="d-flex">
                        <button type="button" class="btn btn-outline-danger btn-block btn-sm text-body me-2" >Cancel </button>
                        <button type="button" class="btn btn-outline-success btn-block btn-sm text-body" onClick={handleSubmit}>Create </button>
                        <Toaster />
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Edit_product
