import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, 
         Clock, 
         CountdownSection, 
         ImgContainer, 
         Left, 
         Right, 
         Text1, 
         Text2, 
         Time, 
         Type } from './CountdowmStyle'
import CouterImg from '../../assets/images/counter-timer-img.png'

const Countdown = () => {
   const [day, setDay] = useState()
   const [hour, setHours] = useState()
   const [minute, setMinutes] = useState()
   const [second, setSecond] = useState()
   const countDown = ()=>{
      let destination, now;
      let interval = setInterval(() => {
         destination = new Date('March 30,2023').getTime()
         now = new Date().getTime()
         let different = destination - now
         const days = Math.floor(different / (60 * 60 * 24 * 1000))
         const hours = Math.floor(different % (60 * 60 * 24 * 1000) / (60 * 60 * 1000))
         const minutes = Math.floor(different % (60 * 60 * 1000) / (1000 * 60))
         const seconds = Math.floor(different % (60 * 1000) / 1000)
         if (different < 0) { clearImmediate(interval.current) }
         else {
            setDay(days)
            setHours(hours)
            setMinutes(minutes)
            setSecond(seconds)
         }
      })
   }
   useEffect(()=>{
      countDown()
   },[])
   return (
      <Fragment>
         <CountdownSection>
            <Left>
               <Text1>Limited Offers</Text1>
               <Text2>Quality Armchair</Text2>
               <Clock>
                 <Time>{ day >=10 ? day : '0'+day } <Type>Days</Type></Time>
                 <span>:</span>
                 <Time>{ hour >=10 ? hour : '0'+hour } <Type>Hours</Type></Time>
                  <span>:</span>
                 <Time>{ minute >=10 ? minute : '0'+minute } <Type>Minutes</Type></Time>
                  <span>:</span>
                 <Time>{ second >=10 ? second : '0'+second } <Type>Seconds</Type></Time>
               </Clock>
               <Link to='shop'><Button>Vist Store</Button></Link>
            </Left>
            <Right>
               <ImgContainer>
                  <img style={{ width: '80%' }} src={CouterImg} alt='Chair' />
               </ImgContainer>
            </Right>
         </CountdownSection>
      </Fragment>
   )
}

export default Countdown