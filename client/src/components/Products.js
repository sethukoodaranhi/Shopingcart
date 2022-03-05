import React, { useEffect, useState } from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext, PriceContext } from '../Context/LoginContext';
import Cart from '../pages/Cart';
import './products.css'
export default function Products({ adproducts }) {
    const UserProducts =() => {

        let navigate = useNavigate()
        // const path=process.env.REACT_APP_PUBLIC_FOLDER
        const [Productview, setProductview] = useState([]);
        const { priceRange, filteredBrace } = useContext(PriceContext)
        let { serachKey, setProductDetail, data } = useContext(ProductContext)
        useEffect(() => {
            axios.get("http://localhost:5000/api/pview").then((response) => {
                setProductview(response.data.data)  
                // setProductDetail({
                //     ...Productview,
                //     data:response.data.data
                // }) 
                localStorage.setItem('productsdetails',JSON.stringify(response.data.data))
            })           
        },[])
        
       
        let filterdata = Productview.filter((searchVal) => {
            return searchVal.pname.toLowerCase().includes(serachKey)
        })
       

        // let pricedata=data.filter((p)=>{
        //   return p.price.includes(priceRange)

        // })

        // for(var i=0, length=Productview.length; i<length; i++){
        //     var current = Productview[i]; 
        //     if(current.Price >= 200 && current.Price <= 400){ 
        //        Productview.filter((p)=>{
        //         return p.price>=200 && p.price<=400
        //        })
        //     }
        //  }

        // let productdata={data}
        // if( filteredBrace!=0)
        // {
        //     data=filteredBrace
        // }
        // else if(filterdata!=0)
        // {
        //     data=filterdata
        // }
        // else{
        //     data=productdata

        // }
        if(filteredBrace!=0){
            filterdata=filteredBrace
        }
        console.log("pricefilter data"+ JSON.stringify(filteredBrace))
        return (
            <>
                {filterdata.map((value, key) => {
                    return (

                        <Link to={`/buy/${value._id}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <Card style={{ width: "14em", display: "inline-flex", justifyContent: "space-around" }} className='productcard mt-2 mb-2 ms-5 shadow' key={key}>
                            <Card.Img variant="top" src={`/upload/${value.image}`} />
                            <Card.Body>
                                <Card.Title>{value.pname}</Card.Title>
                                <Card.Text>
                                    Rs.{value.price}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                {/* <Link to={`/buy/${value._id}`}><Button variant="primary" className='btn-sm'>Buy<PaidOutlinedIcon/></Button></Link> */}

                                <Link to={`/cart/${value._id}`}><Button variant="primary" className='w-100 btn-sm'>Cart<ShoppingCartOutlinedIcon /></Button></Link>
                            </Card.Footer>
                        </Card></Link>

                    )
                })}
            </>
        )
    }
    const AdminProducts = () => {
        const { priceRange } = useContext(PriceContext)
        let navigate = useNavigate()
        // const path=process.env.REACT_APP_PUBLIC_FOLDER
        const [Productview, setProductview] = useState([]);
        useEffect(() => {
            axios.get("http://localhost:5000/api/pview").then((response) => {
                setProductview(response.data.data)
            })
        }, [])


        const Deletehandler = (id) => {
            axios.get(`http://localhost:5000/api/delete/${id}`)
                .then((response) => {
                    console.log(response.data.data)
                    navigate('/adminhome')
                })
        }

        return (
            <>
                {Productview.map((value, key) => {

                    return (
                        // <div className=' mt-2 w-25'  >

                        <Card style={{ width: "14em", display: "inline-flex", justifyContent: "space-around" }} className='productcard mt-2 mb-2 ms-5 shadow' key={key}>
                            <Card.Img variant="top" src={`/upload/${value.image}`} />
                            <Card.Body>
                                <Card.Title>{value.pname}</Card.Title>
                                <Card.Text>
                                    Rs.{value.price}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to={`/edit/${value._id}`}><Button variant="primary" className='btn-sm'>Edit <ModeEditOutlineOutlinedIcon /></Button></Link>

                                <Button variant="primary" className='ms-4 btn-sm' onClick={() => Deletehandler(value._id)}>Delete<DeleteOutlineOutlinedIcon /></Button>
                            </Card.Footer>
                        </Card>

                        // </div>
                    )
                })}

            </>
        )
    }
    return (
        <div>
            {adproducts ? <AdminProducts /> : <UserProducts />}
        </div>
    )

}
