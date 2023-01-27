import React from 'react'
import styled from 'styled-components'
import '../../App.css'
export const HeaderComp = styled.header`
   padding: 10px 0px;
   `
export const Navigation = styled.nav`
   display: flex;
   justify-content: space-around;
   align-items: center;
   @media (max-width:768px){
      justify-content: space-between;
      padding: 0 20px;
   }
   `
//  Left part
export const Left = styled.div`
   display: flex; 
   align-items: center;
   column-gap: 10px;
   `
export const Img = styled.img`
   width: 30px;
   height:30px;
   @media (max-width:768px){
   width: 20px;
   height:20px;
   }
   `
export const LogoNav = styled.h4`
   font-weight: 600;
   @media (max-width:768px){
      font-size: 1.2rem;
   }
   `
// Center part
export const Center = styled.div`
   overflow: hidden;
   @media (max-width:768px){
      position: absolute;
      top: 0;
      right: 0;
      width: 200px;
      height: 100%;
      background-color: white;
      align-items: center;
      display: flex;
      justify-content: center;
      transform: translateX(100%);
   }
   transition: .3s;
   
   `
export const List = styled.div`
   display: flex;
   column-gap: 20px;
   @media (max-width:768px){
      justify-content: center;
      flex-direction: column; 
      align-items: center;
      row-gap: 20px;
     
   }
   #close{
      position: absolute;
      left: 0;
      top: 50px;
      font-size: 30px;
      cursor: pointer;
   }

   `
// Right part
export const Right = styled.div`
   display: flex;
   align-items: center;
   column-gap:10px ;
      `
export const Icon = styled.span`
   display: flex;
   font-size: 1.3rem;
   cursor: pointer;
   position: relative;
   user-select: none;
   :active{
   transform: scale(1.2);
   }
      `
export const IconText = styled.span`
   position: absolute;
   background-color: #0a1d37;
   border: 1px solid black;
   border-radius: 50%;
   top: 0;
   right: -10px;
   color: white;
   font-size:.6rem ;
   width: 15px;
   height: 15px;
   display: flex;
   align-items: center;
   justify-content: center;
   user-select: none;

   `
export const MobileIcon = styled.span`
      cursor: pointer;
      display: none;
     @media (max-width:768px){
      display: block;
     }
      `
export const Checklabel = styled.label`
cursor: pointer;
#close{
   display: none;
}
@media (max-width:768px){
   #close{
      display: block;
   }
}

`
export const Input = styled.input`
:checked ~ #active_menu{
   transform: translateX(0%);

}
`
export const StickyHeader = {
   position: 'sticky',
   zIndex: '1000000000000000',
   backgroundColor: '#fff',
   lineHeight: '50px',
   width: '100%',
   top: '0',
   left: '0',
}


