import React from 'react';
import Topbar from '../components/Topbar';
import Carouselpart from '../components/Carouselpart';
import Navitems from '../components/Navitems';
import Products from '../components/Products';
import { ProductContext, PriceContext } from '../Context/LoginContext'
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
function Homepage() {
    const [ProductDetail, setProductDetail] = useState({
        serachKey:""
    });
    const [PriceFilter, setPriceFilter] = useState({
        priceRange: 0
    });
    console.log("productdetail" + ProductDetail)
    return (
        <div>
            <ProductContext.Provider value={{serachKey:ProductDetail.serachKey, setProductDetail }}>
            <Topbar />           
            <Carouselpart />
            <Navitems />
            <PriceContext.Provider value={{ priceRange: PriceFilter.priceRange, setPriceFilter }}>
            <Sidebar />
            </PriceContext.Provider>           
            <Products />
            </ProductContext.Provider>
             
        </div>

    )

}

export default Homepage;
