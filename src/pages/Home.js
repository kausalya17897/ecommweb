import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Updatemsg from '../components/Updatemsg';
import Footer from '../components/Footer';
export default function Home() {
  
  return (
    <div>
      <div className='deal'>
        !Deal of the day free shipping on orders over Rs 500
      </div>
     <Navbar/>
     <Slider/>
     <Categories/>
     <Products/>
     <Updatemsg/>
     <Footer/>
      </div>
    
  )
}
