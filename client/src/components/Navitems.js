import React from 'react';
import { Nav, NavDropdown, Container, Navbar } from 'react-bootstrap';
import { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';
export default function Navitems() {
    const{username}=useContext(LoginContext)
    return (
        <div>
            <div >
            <Navbar collapseOnSelect expand="lg" >
                <Container >
                    <Navbar.Brand href="#home"><img src='./images/emoji.jpg'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto d-flex justify-content-center">
                        <Nav.Link href="#features"><img src='./images/fashion.jpg' style={{ width: "120px", height: "120px", borderRadius: "20em", objectFit: "cover" }} ></img><br />
                                <label className=' text-dark ms-4'>Fashion</label></Nav.Link>
                            <Nav.Link href="#features"><img src='./images/mob.jpg' className='ms-5' style={{ width: "120px", height: "120px", borderRadius: "20em", objectFit: "cover" }} ></img><br />
                                <label className=' text-dark ms-5 ps-4'>Mobiles</label></Nav.Link>
                            <Nav.Link href="#features"><img src='./images/home.jpg' className='ms-5' style={{ width: "120px", height: "120px", borderRadius: "20em", objectFit: "cover" }} ></img><br />
                                <label className=' text-dark ms-5 ps-4'>Home<br/>Appliance</label></Nav.Link>
                            <Nav.Link href="#features"><img src='./images/makeup.jpg' className='ms-5' style={{ width: "120px", height: "120px", borderRadius: "20em", objectFit: "cover" }} ></img><br />
                                <label className=' text-dark ms-5 ps-4'>Beauty</label></Nav.Link>
                            <Nav.Link href="#features"><img src='./images/toys.jpg' className='ms-5' style={{ width: "120px", height: "120px", borderRadius: "20em", objectFit: "cover" }} ></img><br />
                                <label className=' text-dark ms-5 ps-5'>Toys</label></Nav.Link>

                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
                <h1>{username}</h1>
            </Navbar>
            </div>
        </div>
    )
}
