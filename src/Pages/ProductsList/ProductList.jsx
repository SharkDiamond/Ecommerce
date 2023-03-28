import styled from "styled-components"
import { Anuncios } from "../../Components/Anuncios"
import { Navbar } from "../../Components/Navbar"

const Container = styled.div`
    

`
const Title = styled.h1`
    

`
const FilterContainer = styled.div`
    
    display: flex;
    justify-content: space-between;


`

const Filter = styled.div`
    

`

export const ProductList = () => {
  return (
    <Container>
        <Anuncios/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>filtrer1</Filter>
            <Filter>filtrer1</Filter>
        </FilterContainer>
    </Container>
  )
}
