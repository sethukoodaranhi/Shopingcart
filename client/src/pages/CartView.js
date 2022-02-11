import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import DeleteIcon from '@mui/icons-material/Delete';
import PaidOutlined from '@mui/icons-material/PaidOutlined';
import DeliveryAddress from './DeliveryAddress';
import {Link,useNavigate} from 'react-router-dom'
export default function CartView() {
    let navigate=useNavigate()
    const [Cartproducts, setCartproducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/api/cartview')
            .then((response) => {
                console.log(response.data.data)
                setCartproducts(response.data.data)
            })
    },[])
    const CartDelete=(id)=>{
        axios.get(`http://localhost:5000/api/cartdelete/${id}`)
        .then((response)=>{
            console.log(response.data.data)
            navigate('/cartview')
        })
    }
    let total=0
    return (
        <>
        <h1>My Cart</h1>
            {Cartproducts.map((value, key) => {
                total=total+parseInt(value.totalprice)               
                return (

                    <Card style={{ width: "14em", display: "inline-flex", justifyContent: "space-around" }} className='mt-2 mb-2 ms-5' key={key}>
                        <Card.Img variant="top" src={`/upload/${value.image}`} />
                        <Card.Body >
                            <Card.Title className='text-center'>{value.pname}</Card.Title>
                            <Card.Text>
                                Rs.{value.price}
                            </Card.Text>
                            <Card.Text>
                                <label>Size :{value.size}</label>
                            </Card.Text>

                            <Card.Text>
                            <label>Quantity :{value.quantity}</label>
                            </Card.Text>                  
                            <Card.Text>
                               <label>Total :{value.totalprice} </label>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>   
                        <Button variant="primary" className='btn-sm me-2' onClick={()=>CartDelete(value._id)}><DeleteIcon/></Button> 
                          <Link to={`/delivery/${value._id}`}><Button className='btn-sm'>Buy<PaidOutlined/></Button></Link>               
                        </Card.Footer>
                        {/* {total=total+parseInt(value.totalprice)} */}
                    </Card>
                    
                )
            })}
            <div className='mt-3'>
                <Button className='btn-lg'> Buy All</Button>
                <h2>Grand Total:{total}</h2>
                <Link to='/home'>UserHome</Link>
            </div>
        </>
       
    )
}
