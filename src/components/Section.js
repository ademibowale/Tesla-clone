import React from 'react'
import styled from "styled-components"

function Section({title, description,leftBtnText, rightBtnText, backgroundImg  }) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p> 
      </ItemText>
      <Buttons>
      <ButtonGroup>

      <LeftButton>
       {leftBtnText}
      </LeftButton>
      {rightBtnText &&
      <RightButton>
       {rightBtnText }
      </RightButton>
        }
      </ButtonGroup>
      
      <DownArrow src="/images/arrow_doww.png"/>
                
      </Buttons>
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
background-image:${props => `url("./images/${props.bgImage}")` }
`
   const ItemText = styled.div`
   padding-top:15vh;
   text-alight:center;

   `
const ButtonGroup = styled.div`
     display:flex;
     margin-bottom:20px;
     @media(max-width:768px){
      flex-direction:column;
     }
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
  margin:10px;
`
const RightButton = styled(LeftButton)`
background:white;
opacity:0.65;
color:black;

`
const DownArrow= styled.img`
height:20px;
overflow-x:hidden;
animation:animateDown infinite 1.5s;
cursor:pointer;
`
const Buttons = styled.div`


`