import React from 'react'
import Section from './Section'
import styled from "styled-components"

function Home() {
  return (
    <Container>
       <Section
       title="Model S"
       description="Order Online for Touchless Delivery"
       backgroundImg="tesla_car.jpg"
       leftBtnText="Custom Order"
       rightBtnText="Existing Inventory"/> 
       <Section 
       title="Model Y"
       description="Order Online for Touchless Delivery"
       backgroundImg="teslar_carsss.jpg"
       leftBtnText="Custom Order"
       rightBtnText="Existing Inventory"/> 
       
       <Section
       title="Model 3"
       description="Order Online for Touchless Delivery"
       backgroundImg="downarow.jpg"
       leftBtnText="Custom Order"
       rightBtnText="Existing Inventory"/> 

        <Section
       title="Model X"
       description="Order Online for Touchless Delivery"
       backgroundImg="Model_X.jpg"
       leftBtnText="Custom Order"
       rightBtnText="Existing Inventory"/>  

      <Section
       title="Solar Panels"
       description="Lowest Cost Solar Panels in America"
       backgroundImg="tesla_solar.jpg"
       leftBtnText="Order Now"
       rightBtnText="Learn More"/> 

     <Section
       title="Solar Roof"
       description="Produce Clean Energy From Your Roof"
       backgroundImg="teslasolar_roof.png"
       leftBtnText="Order Now"
       rightBtnText="Learn More"/> 

<Section
       title="Accessories"
       
       backgroundImg="access_new.jpeg "
       leftBtnText="Order Now"
       />


    </Container>
  )
}

export default Home

const Container = styled.div`
 height:100vh
 
 
 ;`
 
 