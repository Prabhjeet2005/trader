import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Hero from '../about/Hero'
import LeftImageRightText from './LeftImageRightText';
import RightImageLeftText from './RightImageLeftText';
import Universe from './Universe';

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LeftImageRightText />
      <RightImageLeftText />
      <Universe />
      <Footer/>
    </>
  )
}

export default ProductPage