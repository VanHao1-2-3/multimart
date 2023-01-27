import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartActions } from '../../Slices/cartSlices'
import { toast } from 'react-toastify'
import {
   AddProduct,
   Bottom,
   Category,
   ImgContainer,
   NameProduct,
   ProductPrice,
   Container
} from './ProductListStyle'
const ProductCard = ({ item }) => {
   const dispatch = useDispatch()
   const addToCart = ()=>{
      dispatch(
         cartActions.addItem({
            id:item.id,
            productName : item.productName,
            price: item.price,
            imgUrl: item.imgUrl
         })
         )
         toast.success('Product has been added')
   }
   return (
      <Fragment>
         <Container>
         <ImgContainer>
            <img src={item.imgUrl} style={{ width: '100%' }} />
         </ImgContainer>
         <Link to={`/shop/${item.id}`}><NameProduct>{item.productName}</NameProduct></Link>
         <Category>{item.category}</Category>
         <Bottom>
            <ProductPrice>${item.price}</ProductPrice>
            <AddProduct className='ri-add-circle-fill' onClick={addToCart}>
            </AddProduct>
         </Bottom>
         </Container>
      </Fragment>
   )
}

export default ProductCard