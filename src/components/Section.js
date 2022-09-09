import React from 'react'
import styled from "styled-components"

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p> 
      </ItemText>
      <ButtonGroup>

      <LeftButton>
       Custom Order
      </LeftButton>

      <RightButton>
       Existing Inventory
      </RightButton>

      </ButtonGroup>
        
      <DownArrow src="/images/down_arrow.png"/>
                
      
      </Wrap>  
        
    
  )
}

export default Section

const Wrap = styled.div`
height:100vh;
width:100vw;
background-image:url(./images/tesla_car.jpg);
background-position: cover;
background-repeat: no-repeat;
background-size: cover;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center; 
`
   const ItemText = styled.div`
   padding-top:15vh;
   text-alight:center;

   `
const ButtonGroup = styled.div`
    display:flex;
    margin-buttom:30px;
`
const LeftButton = styled.div`
  background-color:rgba(23, 26, 32, 0.8);
  height:40px;
  width:256px;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:100px;
  opacity:0.85;
  text-transform:uppercase; 
  font-size:12px;
  cursor:pointer;
`
const RightButton = styled(LeftButton)`


`
const DownArrow= styled.img`
margin-top:20px;
height:40px;


`