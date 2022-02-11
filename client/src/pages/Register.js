import React from 'react'

import { Form, Button } from 'react-bootstrap'
import './register.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import axios from 'axios'
import { useState } from 'react';

export default function Register() {
    let navigate = useNavigate();

    const [regdata, setRegdata] = useState({
        usname: '',
        email: '',
        mob: '',
        sex: '',
        username: '',
        password: '',
        role:0
    })


    const reghandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/add', regdata)
            .then((response) => {

                console.log("data added" + response.data.detail)
                navigate('/')
            })
    }

    const handleChange = (e) => {
        const{ name, value } = e.target

        setRegdata({
            ...regdata,
            [name]: value
        })

    }

    return (
        <div className="Register" style={{ width: "100%", height: "100vh" }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h1 className='text-center text-white mt-2'>Register</h1>
                        <div className='formContainer text-center mt-5 mx-auto '>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Control type="text" placeholder="Name" name='usname' onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Control type="email" placeholder="Mail" name='email' onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Control type="text" placeholder="Mobile No" name='mob' onChange={handleChange} />
                                </Form.Group>

                                <div className="form-check form-check-inline">
                                    <label className="form-check-label text-white" for="inlineRadio1">Female</label>
                                    <input className="form-check-input" type="radio" name="sex" id="inlineRadio1" value="Female" onChange={handleChange} />
                                </div>
                                <div className="form-check form-check-inline">
                                    <label className="form-check-label text-white" for="inlineRadio2">Male</label>
                                    <input className="form-check-input" type="radio" name="sex" id="inlineRadio2" value="Male" onChange={handleChange} />
                                </div>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Usename" name='username' onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} />
                                </Form.Group>                                
                                <Form.Select aria-label="Choose your role" name='role' onChange={handleChange}>
                                    <option>Choose your role</option>
                                    <option value="1">Admin</option>
                                    <option value="2">User</option>                                   
                                </Form.Select>
                                <Button variant="primary" className='mt-2' type="submit" onClick={reghandler}>Register</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}