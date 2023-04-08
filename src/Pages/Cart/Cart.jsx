import React from 'react'
import styled from 'styled-components'
import { Anuncios } from '../../Components/Anuncios'
import { Footer } from '../../Components/Footer'
import { Navbar } from '../../Components/Navbar'
import { Product } from '../../Components/Product'


const Container = styled.div`
    


`
const Wrapper = styled.div`
    padding:20px;


`
const Title = styled.h1`
    
    font-weight:300;
    text-align:center;

`
const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;


`
const TopButtom = styled.button`
        
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};

`


const Bottom = styled.div`
        
        display:flex;
        justify-content:space-between;


`

const TopTexts = styled.div`
    


`

const TopText= styled.span`
    
    text-decoration:underline;
    cursor:pointer;
    margin: 0px 10px;

`
const Info =styled.div`
        flex:3;


`

const Summary= styled.div`

    flex:1;
    background-color:red;

`;


export const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Anuncios/>
        <Wrapper>

            <Title>YOUR BAG</Title>
            <Top>

                <TopButtom>CONTINUE SHOPPING</TopButtom>
                <TopTexts>

                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your  Wishlist(0)</TopText>

                </TopTexts>
                <TopButtom type="filled">CHECKOUT NOW</TopButtom>

            </Top>
            <Bottom>

                <Info><Product></Product></Info>
                <Summary>summary</Summary>


            </Bottom>

        </Wrapper>


        <Footer/>



    </Container>
  )
}
