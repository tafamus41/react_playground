import React from 'react'
import ProductCard from "./ProductCard";
import "./Products.scss"

const Products = ({products}) => {

 
  
  return (
    <div className='product-list'>
{
  products.map((ürün)=>(

   
    <ProductCard key={ürün.id} {...ürün} />


  ))
}

    </div>
  )
}
//  {
//    /* <ProductCard key={ürün.id} urun={ürün}/> */
//  }
export default Products