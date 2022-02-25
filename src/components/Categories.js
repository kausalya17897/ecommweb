import React from 'react'
import styled from 'styled-components';
import {categories} from "../pages/Slideritem";
import Categoryitem from "./Categoryitem";

const Container=styled.div`
display:flex;
padding:20px;
justify-content:space-between;
`
export default function Categories() {
  return (
    <Container>
       {categories.map(a=>(
              <Categoryitem a={a} key={a.id}/>
       ))}
    </Container>
    
  )
}
