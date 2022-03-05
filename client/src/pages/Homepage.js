import React from 'react';
import Topbar from '../components/Topbar';
import Carouselpart from '../components/Carouselpart';
import Navitems from '../components/Navitems';
import Products from '../components/Products';
import { ProductContext, PriceContext} from '../Context/LoginContext'
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
function Homepage() {
    const [ProductDetail, setProductDetail] = useState({
        serachKey:'',
        data:''
    });
    const [PriceFilter, setPriceFilter] = useState({
        priceRange: 0,
        filteredBrace:[]
    });
    const [userName, setUserName]=useState({
        uname:'sethu'
      });
    return (
        <div>           
            <ProductContext.Provider value={{serachKey:ProductDetail.serachKey,data:ProductDetail.data, setProductDetail }}>           
            <Topbar />                                                
            <Carouselpart />
            <Navitems />
            <PriceContext.Provider value={{ priceRange: PriceFilter.priceRange,
                filteredBrace:PriceFilter.filteredBrace, setPriceFilter }}>
            <Sidebar />                        
            <Products />              
            </PriceContext.Provider>       
            </ProductContext.Provider>
        </div>

    )

}


export default Homepage;
