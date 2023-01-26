import { createSlice } from '@reduxjs/toolkit'

const initialState = {
cartItem :[],
total :0,
quantity :0,
}

const cartSlices = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem:(state,action)=>{
      const newItem = action.payload;
      const existedItem = state.cartItem.find(item =>item.id === newItem.id);
      state.quantity++;
      if(!existedItem){
        state.cartItem.push({
          id: newItem.id,
          productName:newItem.productName,
          imgUrl:newItem.imgUrl,
          price:newItem.price,
          quantity:1,
          totalPrice : newItem.price
        })
      }
      else{
        existedItem.quantity ++
        existedItem.totalPrice = existedItem.totalPrice + newItem.price
      }
      state.total = state.cartItem.reduce((total,item)=>{ return (total + Number(item.price) * Number(item.quantity))},0)
    },
    deleteItem :(state,action)=>{
      const id = action.payload
      const existItem = state.cartItem.find(item=>item.id === id)
      if(existItem){
        state.cartItem = state.cartItem.filter(item => item.id !== id)
        state.quantity = state.quantity - existItem.quantity
      }
      state.total = state.cartItem.reduce((total,item)=>{ return (total + Number(item.price) * Number(item.quantity))},0)
    }
  },
});

export const cartActions = cartSlices.actions

export default cartSlices.reducer