import React from 'react'
import logo from '../Assests/logo.png'
import Hero from '../Components/Hero'

const Home = () => {
  return (
    <div>
        <header className='navbar'>
            <img src={logo} alt = "logo"/>
        </header>
        <Hero/>
    </div>
  )
}

export default Home