import styled from "styled-components";
export const Container = styled.div`
display: flex;
padding: 0 100px;
column-gap: 10px;
margin-top: 30px;
flex-wrap: wrap;
row-gap: 10px;
@media (max-width:1000px){
   padding: 0;
}
@media (max-width:680px){
   flex-direction: column;
}

`
export const Service = styled.div`
background-color: ${prop => prop.bg};
   flex: 1;
display: flex;
padding: 18px;
column-gap: 10px ;
cursor: pointer;
transition: 0.2s;
:hover{
   transform: scale(1.05);
}
@media (max-width:1000px) and (min-width: 681px){
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
}

`
export const Icon = styled.i`
font-size: 1.4rem;
border: 1px solid ;
background-color: #0a1d37;
color: white;
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
@media (max-width:1000px){
   font-size: 1.2rem;
}
`
export const Text1 = styled.p`
font-weight:600;
color: black;
@media (max-width:768px){
   font-size: .8rem;
}
`
export const Text2 = styled.p`
font-size:.8rem;
@media (max-width:768px){
   font-size: .7rem;
}
`