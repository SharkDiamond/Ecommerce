import React from 'react'
import styled from 'styled-components'


const Slide = styled.div`
width:100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: ${props=>props.bg};
`

const ImgContainer = styled.div`
    height: 100%;
    flex:1;
`
const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`

const Title = styled.h1`

font-size: 70px;
font-weight: bold;

`

const Desc = styled.p`

margin:50px 0 px; 
font-size: 20px;
font-weight: bold;
letter-spacing: 3px;
`

const Button = styled.button`

    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;

`
const Image = styled.img`
  
  height: 80%;


`

export default function SlidePage({bg,img,title,desc}) {
  return (
    <Slide bg={bg}>

        <ImgContainer>
            <Image src={img}/>  
        </ImgContainer>
        
        <InfoContainer>

            <Title>{title}</Title>
            <Desc>{desc}</Desc>
            <Button>SHOW NOW</Button>

        </InfoContainer>

</Slide>
  )
}
