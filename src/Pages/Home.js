import React, { useState } from 'react'

import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'

const Home = () => {

  const data = JSON.parse(localStorage.getItem("formData"));
  

  console.log(data)
  return (
    <div>
        <Navbar/>
        <Hero/>
        <img src= {data.coverImage}/>
    </div>
  )
}

export default Home