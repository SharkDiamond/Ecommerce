import React from 'react'
import styled from 'styled-components'
import { Badge } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Search } from '@mui/icons-material';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 80px;
     background-color: white;
     margin-bottom: 20px;
     ${mobile({height:"50px"})}

`

const Wrapper = styled.div`
    padding: 10px 20px;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding:"10px 0px"})}

`
const Left = styled.div`

flex:1;
display: flex;
align-items: center;

`

const Language = styled.span`
    font-size: 14px;
    cursor:pointer;
    ${mobile({display:"none"})}


`

const SearhContainer = styled.div`

border: 0.5px solid lightgray;
display: flex;
aling-items: center;
margin-left: 25px;
padding: 5px;
${mobile({marginLeft:"1px"})}
`
const Input = styled.input`

border: none;
${mobile({width:"50px"})}

`

const Logo = styled.h1`

    font-weight: bold;
    ${mobile({fontSize:"24px"})}

`


const Center = styled.div`

flex:1;
text-align: center;

`
const Rigth = styled.div`

flex:1;
display: flex;
align-items: center;
justify-content: flex-end;

${mobile({ flex:3, justifyContent:"center"})}

`
const MenuItem = styled.div`

font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize:"12px" , marginLeft: "10px"})}

`


export const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left><Language>EN</Language>
            <SearhContainer>
                <Input placeholder='Search'/>
                <Search style={{color:"gray",fontSize:"16px"}}/>
            </SearhContainer>
            
            </Left>
            <Center><Logo>LAMA.</Logo></Center>
             <Rigth>
                
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">

                    <ShoppingCartOutlinedIcon/>

                </Badge>
                
                </MenuItem>
            </Rigth>       
        </Wrapper>


    </Container>
  )
}
