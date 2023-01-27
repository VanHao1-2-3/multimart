import styled from "styled-components";

export const Container = styled.div`
display: flex;
column-gap: 30px;
@media (max-width:768px){
   flex-direction: column;
   padding-left: 30px;
}

`
export const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
`
export const Right = styled.div`

flex:1;
padding-top: 50px;
row-gap: 10px;
i{
   color: orange;
}
`
export const ProductName = styled.p`
margin-bottom: 5px;
font-size: 2rem;
font-weight: 600;
color: #333;
`
export const ProductDesc = styled.p``
export const ProductPrice = styled.p`
color:#333;
font-weight: 450;
margin-top: 20px;
`
export const Rating = styled.span`
margin-left: 20px;
font-weight: 500;
`
export const Button = styled.button`
background-color: #0a1d37;
color: white;
padding: 4px 7px;
margin-top: 10px;
border-radius: 5px;
:active{
   transform: scale(.96);
}
`
export const Tabs = styled.div`
padding-left: 100px;
p{
   cursor: pointer;
   font-weight: 500;
   color: #000;
}
ul li span{
   font-weight: 500;
}
.active{
   font-weight: 600;
}
@media (max-width:640px){
   padding-left: 20px;
}
`
export const Related = styled.div`
h3{
   margin-left: 50px;
   margin-top: 30px;
}

`