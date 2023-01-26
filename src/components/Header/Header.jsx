import React, { useRef, useEffect } from 'react'
import Logo from '../../assets/images/eco-logo.png'
import { NavLink } from 'react-router-dom'
import userIcon from '../../assets/images/user-icon.png'
import { useSelector } from 'react-redux'
import {
  HeaderComp,
  Navigation,
  Left,
  Center,
  Right,
  Img, LogoNav, List, Icon, MobileIcon, IconText, Checklabel, Input, Overlay,
} from './HeaderStyle'
const Active = {
  fontWeight: 'bold',
}
const NavlinkArr = [
  {
    path: '/',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  },
]

const Header = () => {
  const cartQuantity = useSelector(state => state.cart.quantity)
  return (
    <HeaderComp >
      <Navigation>
        <Left>
          <Img src={Logo}></Img>
          <LogoNav>Multimart</LogoNav>
        </Left>
        <Input hidden id='menutoggle' type={'checkbox'} />
        <Center id='active_menu'>
          <List>
            <Checklabel htmlFor='menutoggle'> <i id='close' className="ri-close-fill"></i></Checklabel>
            {
              NavlinkArr.map((item, index) => (
                <NavLink style={(navItem) => navItem.isActive ? Active : {}} to={item.path} key={index}> {item.display}</NavLink>
              ))
            }
          </List>
        </Center>
        <Right>
          <Icon className="ri-heart-line"><IconText>1</IconText></Icon>
          <NavLink to={'cart'}><Icon className="ri-shopping-bag-line"><IconText>{cartQuantity}</IconText></Icon></NavLink>
          <Icon><img style={{ width: '2rem' }} src={userIcon} alt='User' /></Icon>
          <Checklabel htmlFor='menutoggle' className='toggle'><MobileIcon><i className="ri-menu-line" ></i></MobileIcon></Checklabel>
        </Right>
      </Navigation>
    </HeaderComp>
  )
}

export default Header