import React, { useEffect } from 'react'
import { Button, Modal, FloatingLabel, Form, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import './register.css'
import axios from 'axios';
 import DeliveryaddressView from '../components/DeliveryaddressView';
export default function DeliveryAddress() {   
    const [Address, setAddress] = useState({
        houseno:0,
        area:'',
        mobile:0,
        pincode:0,
        landmark:''
    })
  
    const Getaddress=(e)=>{
        const{name,value}=e.target
        setAddress({
            ...Address,
            [name]:value
        })
    }
    const Deliveryhandler=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/deliveryaddress',Address)
        .then(response=>{
            console.log(response.data.data)
        })
    }
    return (
        <div className="Register" style={{ width: "100%", height: "500vh" }}>
          <h1 className='text-white mb-3'>Delivery Address</h1>
            <>
            <center>
            <div className=''>
                <FloatingLabel
                    controlId="floatingInput"
                    label="House no/Building no"
                    className="mb-3 w-50"
                >
                    <Form.Control type="text" size="sm" placeholder="House no/Building no" name='houseno' onChange={Getaddress}/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="RoadName/Area/Colony"  className="mb-3 w-50">
                    <Form.Control size="sm" type="text" placeholder="RoadName/Area/Colony" name='area' onChange={Getaddress}/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Mobile"  className="mb-3 w-50">
                    <Form.Control size="sm" type="text" placeholder="Mobile" name='mobile' onChange={Getaddress}/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Pincode"  className="mb-3 w-50">
                    <Form.Control size="sm" type="text" placeholder="Pincode" name='pincode' onChange={Getaddress} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Landmark(optional)"  className="mb-3 w-50">
                    <Form.Control size="sm" type="text" placeholder="Landmark" name='landmark' onChange={Getaddress} />
                </FloatingLabel>
                </div>
                <Button type='submit' onClick={Deliveryhandler}>Save</Button>
                </center>
            </>
            <hr></hr>
             <DeliveryaddressView/>
        </div>
    )
}
