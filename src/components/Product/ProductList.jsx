import React, { Fragment } from 'react'
import {
   Title,
   Product
} from './ProductListStyle'
import ProductCard from './ProductCard'
const ProductList = ({ title, data, length}) => {
   return (
      <Fragment>
         <Title>{title}</Title>
         <Product>
            {
               data.map((item, index) => (
                  <ProductCard key={index} item={item}>
                  </ProductCard>
               )).slice(0,length)
            }
         </Product>
      </Fragment>
   )
}

export default ProductList