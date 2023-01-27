import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Column, FooterContainer, Icon, Item, ItemContainer, Title } from './FooterStyle'

const Footer = () => {
  return (
    <Fragment>
      <FooterContainer>
        <Column>
          <Title>Multimart</Title>
          <Item>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Item>
        </Column>
        <Column>
          <Title>Top Categories</Title>
          <Link to='#'><Item>Mobile Phones</Item></Link>
          <Link to='#'><Item>Modern Sofa</Item></Link>
          <Link to='#'><Item>Arm Chair</Item></Link>
          <Link to='#'><Item>Smart Watches</Item></Link>
        </Column>
        <Column>
        <Title>Useful Link</Title>
        <Link to='shop'><Item>Shop</Item></Link>
        <Link to='cart'><Item>Cart</Item></Link>
        <Link to='login'><Item>Login</Item></Link>
        <Link to='#'><Item>Privacy Policy</Item></Link>
        </Column>
        <Column>
          <Title>Contact</Title>
          <Link to={'#'}>
          <ItemContainer>
          <Icon className="ri-map-pin-line"></Icon>
          <Item>Trảng Bàng, Tây ninh</Item>
          </ItemContainer>
          </Link>
          <Link to={'#'}>
          <ItemContainer>
          <Icon className="ri-phone-line"></Icon>
          <Item>(+84) 35 955 0121</Item>
          </ItemContainer>
          </Link>
          <Link to={'#'}>
          <ItemContainer>
          <Icon className="ri-mail-line"></Icon>
          <Item>hovanhao12b1@gmail.com</Item>
          </ItemContainer>
          </Link>
        </Column>
      </FooterContainer>
    </Fragment>
  )
}

export default Footer