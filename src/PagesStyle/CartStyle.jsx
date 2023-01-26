import styled from "styled-components";

export const Container = styled.div`
display: flex;
column-gap: 20px;
padding: 0 50px;
margin-bottom: 30px;
@media (max-width:800px){
   flex-direction: column;
   padding: 0;
   row-gap: 10px;
}
`
export const Table = styled.table`
border-bottom: 1px solid;
width: 100%;
tr td{
   width: 150px;
   font-weight: 450;
border-top: 1px solid;
}

`
export const Icon = styled.i`
font-size: 1.6rem;
:active{
   font-size: 1.4rem;

}
`
export const Left = styled.div`
flex: 3;
`
export const Right = styled.div`
border-radius: 3px;
padding: 20px;
background-color: #0a1d37;
border: 1px solid;
flex: 1;
.total,.quantity{
   display: flex;
   justify-content: space-between;
   p{
      font-size: 1.1rem;
      color: white;
      padding: 5px 0;
   }
}
.button{
   display: flex;
   justify-content: space-between;
   /* line-height: 40px; */
   padding: 5px;
   button{
      border-radius: 5px;
      padding: 8px 10px;
      font-weight: 500;

   }
}
hr{
   height: 2px;
   background-color: gray;
}
@media (max-width:800px){
width: 50%;
}
@media (max-width:420px){
   width: 100%;
}
`