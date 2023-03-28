import React from 'react'
import { Anuncios } from '../../Components/Anuncios'
import { Categories } from '../../Components/Categories'
import { Footer } from '../../Components/Footer'
import { Navbar } from '../../Components/Navbar'
import { Newsletter } from '../../Components/Newsletter'
import { Products } from '../../Components/Products'
import Slider from '../../Components/Slider'


export const Home = () => {
  return (
    <>
        <Anuncios/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </>
  )
}

