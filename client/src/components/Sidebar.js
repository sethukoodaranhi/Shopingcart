import React from 'react';
import { Button, Offcanvas, Form } from 'react-bootstrap';
import { useState } from 'react';
import { PriceContext } from '../Context/LoginContext';
import { useContext } from 'react';
import { ProductContext } from '../Context/LoginContext';

export default function Sidebar() {
  const [Price, setPrice] = useState('')
  const { priceRange, setPriceFilter } = useContext(PriceContext)
  const [show, setShow] = useState(false);
  const { data } = useContext(ProductContext)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var Fulldata =JSON.parse(localStorage.getItem('productsdetails')) 
  console.log("complete data::"+Fulldata)
  let first = 200
  let second = 400

  const PriceHandler = (e) => {
    setPrice(e.target.value)
  }

  if (Price === "200-400") {
    first = 200
    second = 400
  }
  else if (Price === "400-600") {
    first = 400
    second = 600
  }
  else if (Price ==="600-800") {
    first = 600
    second = 800
  }
  else if (Price ==="800-1000") {
    first = 800
    second = 1000
  }
  let pricedata=Fulldata.filter((p) => {
    return p.price>=first&&p.price<=second
  })
  console.log("pricedata::" +pricedata)

  
  const PriceFilterHandler = () => { 
    setPriceFilter({
      ...Price,
      //  priceRange:Price,
      filteredBrace: pricedata
    })
    console.log(Price)
  }

  return (
    <div>
      <>
        <center>
          <Button variant="primary" className='text-center' onClick={handleShow}>
            Filter
          </Button>
        </center>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Price</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form.Select name='priceRange' aria-label="Default select example" onChange={PriceHandler}>
              <option>Select the Price</option>
              <option value="200-400">Rs.200-400</option>
              <option value="400-600">Rs.400-600</option>
              <option value="600-800">Rs.600-800</option>
              <option value="800-1000">Rs.800-1000</option>
            </Form.Select>
            <Button className='mt-2 text-center' onClick={PriceFilterHandler} >Done</Button>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </div>
  )

}


