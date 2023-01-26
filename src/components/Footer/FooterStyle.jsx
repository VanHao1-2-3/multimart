import styled from "styled-components";

export const FooterContainer = styled.div`
display: flex;
padding: 20px 100px;
background-color: #0a1d37;
flex-wrap: wrap;
height: 50%;
@media (max-width:600px){
   flex-direction: column;
   padding: 0;
}
`
export const Title = styled.h5`
margin-bottom: 15px;
margin-top: 30px;
color: white;
`
export const Item = styled.p`
font-size: .8rem;
color: #F9F9F9;
:hover{
   color: gray;
}
`
export const Icon = styled.i`
color: #F9F9F9;`
export const Column = styled.div`
flex: 1;
`
export const ItemContainer =styled.div`
display: flex;
column-gap: 10px;
`