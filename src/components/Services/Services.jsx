import React, { Fragment } from 'react'
import { Container, Icon, Service, Text1, Text2 } from './ServicesStyle'
import ServicesData from '../../assets/data/serviceData'
import serviceData from '../../assets/data/serviceData'
const Services = () => {
   return (
      <Fragment>
      <Container>
      {
         serviceData.map((item,index)=>(
            <Service key={index} bg={item.bg}>
               <Icon className={item.icon}></Icon>
               <div>
               <Text1>{item.title}</Text1>
               <Text2>{item.subtitle}</Text2></div>
            </Service>
         ))
      }
      </Container>
      </Fragment>
   )
}

export default Services