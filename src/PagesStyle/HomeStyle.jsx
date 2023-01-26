import styled from "styled-components";

export const Section = styled.section`
   display: flex;
   background-color: #d6e5fb;
   /* padding: 20px; */
   align-items: center;
   @media (max-width:1000px){
      padding: 20px;
   }
    @media (max-width:680px){
      flex-direction: column;
   }
   `
// Left part
export const Left = styled.div`
   flex:1;
   padding-left: 100px;
   @media (max-width:1000px){
      padding-left:20px;
   }
  

   `
export const Text1 = styled.p`
   font-style: .8rem;
   margin-bottom: 15px;
   color: black;
   font-weight: 500;
   @media (max-width:1000px){
      font-size: .8rem;
      margin-top: 15px;
   }
   @media (max-width:680px){
      font-size: .7rem;
   }   `
export const Text2 = styled.p`
   font-weight: 600;
   font-size: 1.7rem;
   color: black;
   margin-bottom: 15px;
   @media (max-width:680px){
      font-size: 1.5rem;
   }
   `
export const Text3 = styled.p`
   margin-bottom: 15px;
   font-size: .9rem;
   @media (max-width:1000px){
      font-size:.8rem;
   }
   @media (max-width:680px){
      font-size: .7rem;
   }
   
   `
export const Button = styled.button`
   border: none;
   padding: 7px;
   border-radius: 5px;
   background-color: #0a1d37;
   color: white;
   font-size: .8rem;
   :active{
      transform: scale(1.1);
   }
   `
// Rigth Part
export const Right = styled.div`
   flex:1;
   `
export const Img = styled.img`
@media (max-width:1000px){
   width: 90%;
}
   `