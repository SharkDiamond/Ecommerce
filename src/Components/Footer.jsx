import { Email, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"


const Container = styled.div`

    display: flex;
    ${mobile({flexDirection:"Column"})}


`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;

`
const Center = styled.div`

flex: 1;
padding: 20px;

${mobile({display:"none"})}

`
const Title = styled.h3`
    
    margin-bottom: 30px;

`

const List = styled.ul`
    
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`

const ListItems= styled.li`
    
    width: 50%;
    margin-bottom: 10px;

`


const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({backgroundColor:"#fff8f8"})}
`

const Logo = styled.h1``
const Desc = styled.p`

margin: 20px 0px;

`
const SocialContainer = styled.div`

display: flex;

`
const SocialIcon = styled.div`

width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color:#${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;

`

const ContactItem=styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment=styled.img`

width: 50%;

`


export const Footer = () => {
  return (
    <Container>

        <Left>
            <Logo>LAMA.</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque, obcaecati assumenda 
                alias perferendis temporibus cum quam inventore. 
                Deserunt rem pariatur quod consequuntur accusamus ab inventore, 
                sit ratione obcaecati consequatur.
            </Desc>
            <SocialContainer>

                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>

                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>


                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>

            </SocialContainer>

        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItems>Home</ListItems>
                <ListItems>Cart</ListItems>
                <ListItems>Man Fashion</ListItems>
                <ListItems>Woman Fashion</ListItems>
                <ListItems>Accessories</ListItems>
                <ListItems>My Account</ListItems>
                <ListItems>Order Tracking</ListItems>
                <ListItems>wishlist</ListItems>
                <ListItems>Term</ListItems>
            </List>


        </Center>
        <Right>

            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>Carrera 11a 190-46</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/> 3125692724</ContactItem>
            <ContactItem><Email style={{marginRight:"10px"}}/>gabrielarispe24@gmail.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>

        </Right>



    </Container>
  )
}
