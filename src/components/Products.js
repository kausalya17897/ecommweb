import React from 'react'
import {productsitem}  from '../pages/Slideritem';
import styled from 'styled-components';
import Product from './Product';

const Container=styled.div`
display:flex;
flex-wrap:wrap;
padding:20px;
justify-content:space-between;
`
export default function Products() {
  console.log("pro",productsitem)
  return (
    <Container>
        
      {productsitem.map(a=>(
        <Product a={a} key={a.id}/>
      ))}
    </Container>
  )
}
