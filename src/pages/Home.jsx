import React, { useState, useEffect } from 'react'
import Hero from '../assets/images/hero-img.png'
import { Link } from 'react-router-dom'
import {
  Section,
  Left,
  Right,
  Text1,
  Text2,
  Text3,
  Button,
  Img,
} from '../PagesStyle/HomeStyle'
import Services from '../components/Services/Services'
import { Fragment } from 'react'
import ProductList from '../components/Product/ProductList'
import products from '../assets/data/products'
import Countdown from '../components/Countdown/Countdown'

const Home = () => {
  const [trending, setTrending] = useState([])
  const [bestsale, setSale] = useState([])
  const [other, setOther] = useState([])
  const [popular, setPopular] = useState([])
  useEffect(() => {
    const trendingProduct = products.filter(item => item.category === 'chair')
    const saleProduct = products.filter(item => item.category === 'sofa')
    const popularProduct = products.filter(item => item.category === 'watch')
    const otherProduct = products.filter(item => item.category === 'mobile' || item.category === 'wireless')
    setTrending(trendingProduct)
    setSale(saleProduct)
    setOther(otherProduct)
    setPopular(popularProduct)
  }, [])
  return (
    <Fragment>
     <Section>
        <Left>
          <Text1>Trending products in 2023</Text1>
          <Text2>Make Your Interior More Minimolistic & Modern</Text2>
          <Text3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text3>
          <Link to={'shop'}><Button>SHOP NOW</Button></Link>
        </Left>
        <Right>
          <Img src={Hero}></Img>
        </Right>
      </Section>
      <Services>
      </Services>
      <ProductList data={trending} title='Trending Products' length={trending.length}></ProductList>
      <ProductList data={bestsale} title='Best Sales' length={bestsale.length}></ProductList>
      <Countdown></Countdown>
      <ProductList data={other} title='New Arrivals' length={other.length}></ProductList>
      <ProductList data={popular} title ="Popular In Category" length={popular.length}></ProductList>
    </Fragment>

  )
}

export default Home