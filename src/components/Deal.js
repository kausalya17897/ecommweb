import styled from 'styled-components'
import React from 'react'


const Deals=styled.div`
background-color: rgb(78, 175, 175)!important;
height:30px;
color:white;`;
export default function Deal() {
  return (
    <Deals>!Deal of the day free shipping on orders over Rs 500</Deals>
  )
}
