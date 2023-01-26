import styled from "styled-components";

export const Container = styled.div`
padding: 0px 100px;
display: flex;
margin-bottom: 30px;

`
export const Left = styled.div`
flex: 3;
form{
   display: flex;
   flex-direction: column;
   row-gap: 7px;
}

h5{
   font-size: 1rem;
}
input{
   border-radius: 7px;
   line-height: 35px;
   outline: none;
   border: .5px solid;
   width: 70%;
}
input::placeholder{
font-size: .9rem;
}


`
export const Right = styled.div`
background-color: #0a1d37;
padding: 20px ;
flex:1;
.placeorder,.end{
   display: flex;
   justify-content: space-between;
   margin-bottom: 10px;

}
.placeorder p{
   color: white;
   font-weight: 500;
}
.end p{
   font-size: 1.2rem;
   color: white;
   font-weight: 500;
}
hr{
   height: 2px;
   background-color: gray;
}
button{
   padding: 5px 7px;
   font-weight: 600;
   color: black;
   border-radius: 5px;
   width: 50%;
   :active{
      transform: scale(.95);
   }
}
`
export const Input = styled.input``