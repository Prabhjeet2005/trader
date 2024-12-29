import React from 'react'
import NavBar from './NavBar'
import Dashboard from './Dashboard'

const Home = () => {
  return (
    <div className='no-scroll'>
      <NavBar />
      <Dashboard />
    </div>
  )
}

export default Home