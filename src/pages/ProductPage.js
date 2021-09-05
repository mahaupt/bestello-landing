import React, { Component } from 'react';
import Product from '../components/products/Products';
import ProductNavbar from '../components/products/ProductNavbar';
import ProductCategories from '../components/products/ProductCategories';

class ProductPage extends Component {
  render() { 
    return ( 
      <>
        <ProductCategories />
        <Product />
        <ProductNavbar />
      </>
     );
  }
}
 

export default ProductPage;