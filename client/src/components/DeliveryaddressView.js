import React from 'react'
import { ListGroup,Card,Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function () {
    const [addressStore, setaddressStore] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/api/viewaddress')
            .then(response => {
                console.log(response.data.data)
                setaddressStore(response.data.data)
            })
    }, [])
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
                                <Card.Link href="#"><Button>Edit</Button></Card.Link>
                                <Card.Link href="#"><Button>Delete</Button></Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}

        </>
    )
}
