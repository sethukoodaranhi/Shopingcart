import React from 'react';
import { ListGroup, Button, ButtonGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export default function Product() {
    const [BuyItem, setBuyItem] = useState({});
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:5000/api/buy/${id}`)
        .then((response) => {
            console.log(response.data.data)
            setBuyItem(response.data.data)
            })
        },[])
        return (
        <div>
            <ListGroup>
                <ListGroup.Item><center><img src={`/upload/${BuyItem.image}`} style={{ width: "250px", height: "250px" }} /></center><br />
                    <label style={{ fontSize: "2em" }} className='ms-33'>Rs.{BuyItem.price}</label><br />
                    <h3>Product Details</h3>
                    <p style={{textAlign:'left'}}><ul style={{ listStyle: "none" }}>
                        <li>
                            <h3>{BuyItem.pname}</h3>
                        </li>
                        <li> Product Type : Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>

                        <li>Material : Lorem Ipsum </li>
                        <li>Size : Free Size</li>
                        <li>Description : psum is simply dummy text of the printing and typesetting industry</li>
                        <li>Country of Origin: India</li>
                    </ul>
                    </p>
                </ListGroup.Item>
                <ListGroup.Item><h4>Available Size</h4>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="primary">S</Button>
                        <Button variant="primary">M</Button>
                        <Button variant="primary">L</Button>
                        <Button variant="primary">XL</Button>
                        <Button variant="primary">FREE SIZE</Button>
                    </ButtonGroup>
                </ListGroup.Item>
             
            </ListGroup>
             <Link to={`/cart/${BuyItem._id}`}><Button>Add Me<ShoppingCartOutlinedIcon/></Button></Link>
           
        </div>
    );
}
