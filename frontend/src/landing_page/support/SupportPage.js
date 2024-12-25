import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Hero from '../about/Hero'
import CreateTicket from './CreateTicket';

const SupportPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CreateTicket />
      <Footer />
    </>
  )
}

export default SupportPage