import React, { Fragment } from 'react'
import CommonSection from '../components/CommonSection/CommonSection'
import { cartActions } from '../Slices/cartSlices'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Icon, Left, Right, Table } from '../PagesStyle/CartStyle'
import { NavLink } from 'react-router-dom'
const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItem)
  const quantity = useSelector(state => state.cart.quantity)
  const total = useSelector(state => state.cart.total)

  return (
    <Fragment>
      <CommonSection title={'Cart'}></CommonSection>
      <Container>
        <Left>
          {
            cartItems.length === 0 ? (
              <h3 style={{ textAlign: 'center', margin: '30px 0' }}>No item added to the cart</h3>
            ) :
              (
                <Table>
                  <tbody>
                    <tr >
                      <th>Image</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                    {
                      cartItems.map((item, index) => (
                        <Tr item={item} key={index}></Tr>
                      ))
                    }
                  </tbody>
                </Table>
              )
          }
        </Left>
          {
            cartItems.length > 0 &&
            (
        <Right>
              <div className='cartInfo'>
              <div className='quantity'>
                <p>Quantity: </p>
                <p> {quantity} items</p>
              </div>
              <div className='total'>
                <p>Total: </p>
                <p>${total}</p>
              </div>
              <hr />
              <div className='button'>
                <NavLink to='/checkout'><button>Checkout</button></NavLink>
                <NavLink to='/shop'><button>Continue Shopping</button></NavLink>
              </div>
            </div>
        </Right>
            )
          }
      </Container>
    </Fragment>
  )
}
const Tr = ({ item }) => {
  const dispatch = useDispatch()
  const deleteItem = () => {
    dispatch(
      cartActions.deleteItem(item.id))
  }

  return (<tr>
    <td><img style={{ width: '70%' }} src={item.imgUrl} alt='images' /></td>
    <td>{item.productName}</td>
    <td>${item.price}</td>
    <td>{item.quantity}</td>
    <td style={{ cursor: 'pointer' }}>
      <Icon onClick={deleteItem} className='ri-delete-bin-line icon'></Icon></td>
  </tr>

  )
}
export default Cart