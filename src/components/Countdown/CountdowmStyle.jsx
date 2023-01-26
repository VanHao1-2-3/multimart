import styled from "styled-components";

export const CountdownSection = styled.div`
display: flex;
justify-content: space-around;
background-color: #0a1d37;
align-items: center;
@media (max-width:600px){
   flex-direction: column;
justify-content: center;
padding: 25px 0px;
}
@media (max-width:1000px) and (min-width: 601px){
   padding: 0 10px;
}
`
// Left part
export const Left = styled.div`
@media (max-width:600px){
   text-align: center;
   justify-content: center;
}
`
export const Text1 = styled.p`
margin-bottom: 5px;
font-size: .9rem;
color:white;`
export const Text2 = styled.p`
margin-bottom: 10px;
color:white;
font-size: 1.2rem;
font-weight: 600;
`
export const Clock = styled.div`
display: flex;
color:white;
column-gap: 10px;
font-size: 30px;
align-items: center;

`
export const Time = styled.div`
text-align: center;
font-size: 1.5rem;
`
export const Type = styled.p`
font-size: .8rem;
text-align: center;
color: white;
margin-bottom: 10px;

`
export const Button = styled.button`
background-color: white;
color: #0a1d37;
font-weight: 550;
padding: 5px 7px;
border-radius: 7px;
:active{
   transform: scale(.9);
}
`
// Right part
export const Right = styled.div``
export const ImgContainer = styled.div``