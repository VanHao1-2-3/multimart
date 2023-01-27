import React, { Fragment , } from 'react'
import CommonSection from '../components/CommonSection/CommonSection'
import { Container, Left, Right, Input } from '../PagesStyle/CheckoutStyle'
import {useSelector} from 'react-redux'

const Checkout = () => {
  const quantity = useSelector(state => state.cart.quantity)
  const total = useSelector(state => state.cart.total)
  return (
    <Fragment>
    <CommonSection title={"Checkout"}>
    </CommonSection>
    <Container>
    <Left>
      <form>
        <h5>Billing Information</h5>
       <input placeholder={'Enter your name'}/>
       <input placeholder={'Enter your email'}/>
       <input placeholder={'Phone number'}/>
       <input placeholder={'City'}/>
       <input placeholder={'Street address'}/>
      </form>
    </Left>
    <Right>
      <div id="placeform">
        <div className='placeorder'>
          <p>Total quantity :</p>
          <p>{quantity} items</p>
        </div>
        <div className='placeorder'>
          <p>Subtotal :</p>
          <p>${total}</p>
        </div>
        <div className='placeorder'>
          <p>Shipping/Free Shipping :</p>
          <p>${0}</p>
        </div>
      <hr/>
      <div className='end'>
        <p>Total Cost : </p>
        <p>${total}</p>
      </div>
      <button>Place an order</button>
      </div>
    </Right>
    </Container>
   </Fragment>
  )
}

export default Checkout