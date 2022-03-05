import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { Button,FloatingLabel, Form } from 'react-bootstrap';
export default function EditAddress() {
    let navigate=useNavigate()
    const [EditAddress, setEditAddress] = useState({
        houseno:0,
        area:'',
        mobile:0,
        pincode:0,
        landmark:''
    })
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/delAddress/${id}`).then((response)=>{
        console.log(response.data.data)
        setEditAddress(response.data.data)

        })
    },[])
    const UpdateAddress=(e)=>{
        const{name,value}=e.target
        setEditAddress({
            ...EditAddress,
            [name]:value
        })
    }
    const EditAdddressHandler=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:5000/api/updateAddress/${id}`,EditAddress)
        .then((response)=>{
            console.log(response.data.data)
            navigate('/delivery')
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
                    <Form.Control type="text" size="sm" value={EditAddress.houseno} placeholder="House no/Building no" name='houseno'
                    onChange={UpdateAddress} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="RoadName/Area/Colony"  className="mb-3 w-50">
                    <Form.Control size="sm" type="text" value={EditAddress.area} placeholder="RoadName/Area/Colony" name='area'
                    onChange={UpdateAddress} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Mobile"  className="mb-3 w-50">
                    <Form.Control size="sm" type="text" placeholder="Mobile" value={EditAddress.mobile} name='mobile'
                    onChange={UpdateAddress} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Pincode"  className="mb-3 w-50">
                    <Form.Control size="sm" type="text" placeholder="Pincode" value={EditAddress.pincode} name='pincode' 
                    onChange={UpdateAddress}/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Landmark(optional)"  className="mb-3 w-50">
                    <Form.Control size="sm" type="text" placeholder="Landmark"  value={EditAddress.landmark} name='landmark' 
                    onChange={UpdateAddress} />
                </FloatingLabel>
                </div>
                <Button type='submit' onClick={EditAdddressHandler}>Save</Button>
                </center>
            </>
        </div>
  )
}
