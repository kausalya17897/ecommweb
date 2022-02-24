import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Image from '../components/Image';
export default function Home() {
  
  return (
    <div>
      <div className='deal'>
        !Deal of the day free shipping on orders over Rs 500
      </div>
     <Navbar/>
     <Slider/>
     <Image/>
      </div>
    
  )
}
