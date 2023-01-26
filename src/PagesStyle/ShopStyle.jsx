import styled from "styled-components";

export const Container = styled.div`


`
export const Title = styled.h2`
text-align: center;
margin: 40px;

`
export const ProductContainer = styled.div`
h1{
   text-align: center;
   margin: 50px;
}
`
export const Functionary = styled.div`
display: flex;
column-gap: 10px;
padding: 0 100px;
@media (max-width:850px){
   flex-direction: column;
   row-gap: 10px;
}

`
export const SelectContainer = styled.span`
display: flex;
column-gap: 20px;
flex: 1;
@media (max-width:520px){
   flex-direction: column;
   row-gap: 10px;
}
`
export const Select = styled.select`
padding: 5px 20px;
border-radius: 5px;
font-weight: 500;
`
export const SearchContainer = styled.span`
position: relative;
flex: 1;
display: flex;
align-items: center;

`
export const Input = styled.input`
padding: 5px 10px;
border-radius: 5px;
width: 100%;
outline: none;
`
export const SearchIcon = styled.i`
position:absolute;
right: 10px;
font-size: 1.3rem;


`

