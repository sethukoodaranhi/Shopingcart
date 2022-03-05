import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import './register.css'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import{useNavigate} from 'react-router'
export default function Update() {
    let navigate = useNavigate()
    const [editedFile, seteditedFile] = useState("");
    const [edit, setEdit] = useState({
        pname: '',
        price: '',
        image: ''
    });

    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:5000/api/edit/${id}`)
            .then((response) => {
                setEdit(response.data.data)
            })
    }, [])

    const Edithandler = (e) => {
        const { name, value } = e.target
        setEdit({
            ...edit,
            [name]: value
        })
    }
    const edittedData = {
        pname: edit.pname,
        price: edit.price,
        image: edit.image
    }

    const UpdateHandler=(e) => {
        e.preventDefault();
        if (editedFile) {
            const updata = new FormData()
            const filename = editedFile.name
            updata.append("name", filename)
            updata.append("file", editedFile)

            axios.post('http://localhost:5000/api/upload', updata)
                .then((response) => {
                    console.log("updated image added" + response)
                   
                })
        }

            axios.post(`http://localhost:5000/api/editted/${id}`,edittedData)
            .then((response) => {
                console.log(JSON.stringify(response.data.data))                
            })
            navigate('/adminhome')

    }
    return (
        <div className="Register" style={{ width: "100%", height: "300vh" }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h1 className='text-center text-white mt-2'>Update</h1>
                        <div className='formContainer text-center mt-5 mx-auto '>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Control type="text" placeholder="Product Name" value={edit.pname} name='pname' onChange={Edithandler} />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Control type="text" placeholder="Price" value={edit.price} name='price' onChange={Edithandler} />
                                </Form.Group>
                                <div className="form-group">

                                    <input type="file" accept="image/* " class="form-control" name="image" onChange={(e) => { seteditedFile(e.target.files[0]); setEdit({ ...edit, image: e.target.files[0].name }) }} />
                                </div>
                                <Button variant="primary" type="submit" className='mt-2' onClick={UpdateHandler}>Update</Button>

                            </Form>
                            <Link to='/adminhome'>Homepage</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
