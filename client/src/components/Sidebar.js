import React from 'react';
import { Button,Offcanvas,Form } from 'react-bootstrap';
import { useState } from 'react';
import { PriceContext } from '../Context/LoginContext';
import { useContext } from 'react';
export default function Sidebar() {
    const{setPriceFilter}=useContext(PriceContext)
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
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
          <Form.Select name='priceRange' aria-label="Default select example"onChange={(e)=>setPriceFilter({priceRange:e.target.value})}>
        <option>Select the Price</option>
        <option value="1">Rs.200-400</option>
        <option value="2">Rs.400-600</option>
        <option value="3">Rs.600-800</option>
        <option value="4">Rs.800-1000</option>
        </Form.Select>
          </Offcanvas.Body>
        </Offcanvas>
      </>
      </div>
  )
  
}


// // function Sidebar() {
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <>
//         <Button variant="primary" onClick={handleShow}>
//           Launch
//         </Button>
  
//         <Offcanvas show={show} onHide={handleClose}>
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body>
//             Some text as placeholder. In real life you can have the elements you
//             have chosen. Like, text, images, lists, etc.
//           </Offcanvas.Body>
//         </Offcanvas>
//       </>
//     );
// //   }
  
// //   render(<Example />);