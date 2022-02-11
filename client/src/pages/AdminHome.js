import React from 'react';
import Topbar from '../components/Topbar';
import Carouselpart from '../components/Carouselpart';
import Navitems from '../components/Navitems';
import Products from '../components/Products';
export default function AdminHome() {
  return (
    <div>
         <Topbar Adtopbar/>
           <Carouselpart/>
           <Navitems/>
            <Products adproducts/>
    </div>
  )
}
