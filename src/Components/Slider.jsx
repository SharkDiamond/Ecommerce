
import { ArrowLeftOutlined, ArrowRightAltOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../../data'
import SlidePage from '../Pages/Home/SlidePage'
import { mobile } from '../responsive'


const Container = styled.div`
    
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: white;
    position: relative;
    overflow: hidden;
    ${mobile({display:"none"})}

`
const Arrow = styled.div`

    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom: 0;
    left:${props=>props.direction==="left" && "10px"};

    right: ${props=>props.direction ==="right" && "10px"};

    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;

`
const Wrapper = styled.div`

height: 100%;
display: flex;
transform: translateX(${props => props.slideIndex * -100}vw);
transition: all 1.4s ease;

`
const Slider = () => {

    const [slideIndex,setSlideIndex]= useState(0);

    const handleClick = (direction)=>{

        if (direction==="left") setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);

        else setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)

    }


  return (
    <Container>
        <Arrow direction="left" onClick={()=>{handleClick("left")}}>
            <ArrowLeftOutlined/>
        </Arrow>

        <Wrapper slideIndex={slideIndex}>
            {
            sliderItems.map(({id,img,title,desc,bg})=> 
            <SlidePage img={img} title={title} desc={desc} bg={bg} key={id}/>
            )
            }
        </Wrapper>

        <Arrow direction="right" onClick={()=>{handleClick("right")}}>
            <ArrowRightOutlined/>
        </Arrow>

    </Container>
  )
}

export default Slider;