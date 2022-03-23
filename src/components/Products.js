import React from 'react'

import styled from 'styled-components';
import Product from './Product';
import { useState } from 'react';
import { useEffect } from 'react';

const Container=styled.div`
display:flex;
flex-wrap:wrap;
padding:20px;
justify-content:space-between;
`
export default function Products() {
  
  const[productsitem,setProductsitem]=useState([]);

  const getShirts=()=>{
    fetch("https://girlszonewebsite.herokuapp.com/shirts")
    .then((data)=>data.json())
    .then((mvs)=>setProductsitem(mvs))

  };
 console.log("pro",productsitem)
useEffect(getShirts,[]);
  return (
    <Container>
        
      {productsitem.map((items,index)=>{
        return(
        
        <Product items={items}
         key={items.id}
          img={items.img} 
          price={items.price} 
          off={items.off} 
          quanity={items.quanity}/>
        )
        })}
    </Container>
  )
}
