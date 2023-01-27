import React, { useState, useEffect } from 'react'
import { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import { Button, Container, Left, ProductDesc, ProductName, ProductPrice, Rating, Related, Right, Tabs } from '../PagesStyle/ProductDetailsStyle'
import CommonSection from '../components/CommonSection/CommonSection'
import ProductList from '../components/Product/ProductList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../Slices/cartSlices'
import { toast } from 'react-toastify'
const ProductDetails = () => {
  const { id } = useParams()
  const product = products.find(product => product.id === id)
  const [tabs, setTabs] = useState('desc')
  const [related, setRelated] = useState([])
  const getRelated = () => {
    const relatedProducts = products.filter(item => item.category === product.category)
    setRelated(relatedProducts)
  }
  useEffect(() => {
    getRelated()
  },[])
  const dispatch = useDispatch()
  const addToCart = ()=>{
     dispatch(
        cartActions.addItem({
           id:product.id,
           productName : product.productName,
           price: product.price,
           images: product.imgUrl
        })
        )
        toast.success('Product has been added')
  }

  return (
    <Fragment>
      <CommonSection title={product.productName}></CommonSection>
      <Container>
        <Left>
          <img src={product.imgUrl} style={{ width: '60%' }} />
        </Left>
        <Right>
          <ProductName>{product.productName}</ProductName>
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-half-s-fill"></i>
          <Rating>{product.avgRating} ratings</Rating>
          <p>{product.category}</p>
          <ProductPrice>${product.price}</ProductPrice>
          <ProductDesc>{product.shortDesc}</ProductDesc>
          <Button onClick={addToCart}> Add to cart</Button>
        </Right>
      </Container>
      <Tabs>
        <div style={{ display: 'flex', columnGap: '20px',padding:'15px 0' }}>
          <p onClick={() => setTabs('desc')} className={`${tabs === 'desc' ? 'active' : ''}`}>Description</p>
          <p onClick={() => setTabs('rev')} className={`${tabs === 'rev' ? 'active' : ''}`}>Reviews({product.reviews.length})</p>
        </div>
        {
          tabs === 'desc' ? (
            <p>{product.description}</p>
          ) : (<div>
            <ul>
              {product.reviews.map((item, index) => (
                <li><span>{item.rating} ratings</span><p>{item.text}</p></li>
              ))}
            </ul>
          </div>)
        }
      </Tabs>
      <Related>
      <h3>Related Products</h3>
        <ProductList data={related} length={4}>
        </ProductList>
      </Related>
    </Fragment>
  )
}

export default ProductDetails