import styled from "styled-components";
export const Container = styled.div``
export const Product = styled.div`
display: grid;
padding: 0 100px;
column-gap: 20px;
grid-template-columns: repeat(4,1fr);
@media (max-width:1001px){
   grid-template-columns: repeat(3,1fr);
   padding: 0 30px;
}
@media (max-width:600px){
   grid-template-columns: repeat(2,1fr);
   padding: 0 20px;
}
@media (max-width:450px){
   grid-template-columns: repeat(1,1fr);
   padding: 0 10px;
}
`
export const Title = styled.h3`
margin-top: 50px;
margin-bottom: 10px;
text-align: center;
font-weight: bold;
`
export const ProductCard = styled.div`
cursor: pointer;
`
export const ImgContainer = styled.div`
transition: 0.2s;
:hover{
   transform: scale(0.9);
}
`
export const NameProduct = styled.p`
font-weight: bold;
color: black;
`
export const Category = styled.p`
font-weight:500;`
export const Bottom = styled.div`
display: flex;
justify-content: space-between;
`
export const ProductPrice = styled.p`
font-weight: 700;
color: #1A120B;
`
export const AddProduct = styled.span`
font-size: 20px;
cursor: pointer;
:active{
   transform: scale(1.1);
}
`