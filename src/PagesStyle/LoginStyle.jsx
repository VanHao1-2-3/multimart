import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
form{
   background-color: #0a1d37;
   width: 40%;
   flex-direction: column;
   display: flex;
   text-align: center;
   justify-content: center;
   align-items: center;
   padding: 20px;
   margin-bottom: 20px;
  h1{
   margin-bottom: 10px;
   color: white;
  }
   input{
      line-height: 35px;
      outline: none;
      margin-bottom: 10px;
      border-radius: 5px;
      border: .5px solid;
      width: 100%;
   }
   button{
      margin: 10px 0;
      padding: 5px 8px;
      border-radius: 5px;
      background-color:white;
      color: #0a1d37;
      font-weight: 500;
      :active{
         transform: scale(.95);
      }
      
   }
   p{
      margin-bottom: 10px;
      cursor: pointer;
   }
}
`