import React from 'react';
import { Form, Button } from 'react-bootstrap'
import './register.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Addproduct() {
    let navigate = useNavigate()
    const [file, setFile] = useState(" "); 
    const [Products, setProducts] = useState({
        pname: '',
        price: '',
        image: ''
    });


    const ProductHandler = (e) => {
        const { name, value } = e.target
        setProducts({
            ...Products,
            [name]: value
        })
    }

    const ProductAdd = async (e) => {
        e.preventDefault()
        if (file) {
            const data = new FormData();
            const filename =file.name
            data.append("name", filename)
            data.append("file", file)
            // setProducts({
            //     ...Products,
            //     image: filename
            // })
            // console.log(Products)               
            await axios.post('http://localhost:5000/api/upload', data)
                .then((response => {
                    console.log(response)
                }))
        }
        await axios.post("http://localhost:5000/api/adproduct", Products)
            .then((response) => {
                console.log(response.data.data)
                navigate('/adminhome')
            })
    }
    // const imagehandler=(e)=>{
    //     if(e.target.files&& e.target.files[0])
    //     {
    //         let img= e.target.files[0]
    //         console.log(img)
    //         setProducts({...Products,image:URL.createObjectURL(img)})   

    //     }
    // }
    return (
        <div className="Register" style={{ width: "100%", height: "100vh" }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h1 className='text-center text-white mt-2'>Register</h1>
                        <div className='formContainer text-center mt-5 mx-auto '>
                            <Form encType='multipart/form-data' >
                                <Form.Group className="mb-3" >
                                    <Form.Control type="text" placeholder="Product Name" name='pname' onChange={ProductHandler} />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Control type="text" placeholder="Price" name='price' onChange={ProductHandler} />
                                </Form.Group>
                                <div className="form-group">

                                    <input type="file" accept="image/* " class="form-control" name="image" onChange={(e) => { setFile(e.target.files[0]); setProducts({...Products,image:e.target.files[0].name })}} />
                                </div>
                                <Button variant="primary" type="submit" className='mt-2' onClick={ProductAdd} >Add</Button>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
