import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './register.css'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
function Cart() {
    let navigate=useNavigate()
    const [CartProduct, setCartProduct] = useState(
        {
           pname:'',
            price:0,
            size:'',
            quantity:0,
            image:'',
            totalprice:0
            
        }
    )
    
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:5000/api/cart/${id}`).then((response) => {
            console.log(response.data.data)
            setCartProduct(response.data.data)
        })
    },[])
    const carthanler=(e)=>{
        const{name,value}=e.target
        setCartProduct({
            ...CartProduct,
            [name]:value
        })
    } 
    const cartitems={
        pname:CartProduct.pname,
        price:CartProduct.price,
        image:CartProduct.image,
        size:CartProduct.size,
        quantity:CartProduct.quantity,
        totalprice:CartProduct.price*CartProduct.quantity
    }
    const Addcartitems=(e)=>{
        e.preventDefault();
        console.log(cartitems)
        axios.post('http://localhost:5000/api/adcart', cartitems)
        .then((response)=>{
            console.log(response.data.data)
            navigate('/cartview')
        })
    }
    // let cart=0

    return (
        <div className="Register" style={{ width: "100%", height: "100vh" }}>
            
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h1 className='text-center text-white mt-2'>Mycart</h1>
                        <div className='formContainer text-center mt-5 mx-auto '>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Control type="text" value={CartProduct.pname} name='pname' onChange={(e)=>{setCartProduct({...CartProduct,pname:e.target.value})}} />
                                    <span ><img src={CartProduct.image} onChange={carthanler}></img></span>
                                </Form.Group>
                                <Form.Select aria-label="Default select example" name='size' onChange={carthanler}>
                                    <option>Select Size</option>
                                    <option value="small">S</option>
                                    <option value="medium">M</option>
                                    <option value="large">L</option>
                                    <option value="extralarge">XL</option>
                                </Form.Select>
                                <Form.Select aria-label="Default select example" name='quantity'className='mt-3' onChange={carthanler}>
                                    <option>Select Quantity</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </Form.Select>
                                <Form.Group className="mt-3" >
                                    <Form.Control type="text" value={CartProduct.price} name='price' onChange={carthanler} />
                                </Form.Group>
                                <Form.Group className="mt-3" >
                                    <Form.Control type="text" value={CartProduct.price*CartProduct.quantity} name='totalprice' onChange={(e)=>{setCartProduct({...CartProduct,totalprice:e.target.value})}} />
                                </Form.Group>
                                {/* {cart=CartProduct.price*CartProduct.quantity}
                                {setCartProduct({...CartProduct,
                                totalamount:cart})} */}
                                
                                <Button variant="primary" className='mt-5 w-75' type="submit" onClick={Addcartitems}>Add</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Cart;
