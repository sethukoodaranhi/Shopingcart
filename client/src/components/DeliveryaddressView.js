import React from 'react'
import { ListGroup,Card,Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
export default function () {
    let navigate=useNavigate()
    const [addressStore, setaddressStore] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/api/viewaddress')
            .then(response => {
                console.log(response.data.data)
                setaddressStore(response.data.data)
            })
    }, [])
    
    const AddressDelete=(id)=>{
        axios.get(`http://localhost:5000/api/addressDelete/${id}`).then(response=>{
            console.log("deleted address.."+response.data.data)
            navigate('/delivery')
        })
    }
    return (
        <>
            {addressStore.map((value, key) => {
                return (
                    <div >

                        <Card  key={key} className='mb-3 ms-3 me-3'>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                <Card.Text>
                                    <ul style={{listStyle:'none',textAlign:'left'}}>
                                        <li>{value.houseno}</li>
                                        <li>{value.area}</li>
                                        <li>{value.mobile}</li>
                                        <li>{value.pincode}</li>
                                        <li>{value.landmark}</li>
                                    </ul>
                                </Card.Text>
                                <Link to={`/editaddress/${value._id}`}> <Button className='me-3'>Edit</Button></Link>
                                <Link to=''><Button onClick={() =>AddressDelete(value._id)}>Delete</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}

        </>
    )
}
