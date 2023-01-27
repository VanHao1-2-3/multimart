import React, { Fragment } from 'react'
import styled from 'styled-components'
import Routers from '../../routers/Routers'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
const Container = styled.div`
/* display: flex;
flex-direction: column;
justify-content: space-between; */
`
const Layout = () => {
   return (
      <Fragment>

         <Container>
            <Header />

            <Routers />

            <Footer></Footer>
         </Container>

      </Fragment>
   )
}

export default Layout