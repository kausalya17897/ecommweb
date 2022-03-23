import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import {useCart} from 'react-use-cart';


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }`

  const Price=styled.p`
height:20px;`
export default function Product({img,price,quanity,items}) {
    console.log("props",img,price,quanity);
  
  const {addItem}=useCart();
  console.log("addItem")
  return (
    <Container>
      <Circle />
      <Image src={img} alt="xdsg"/>
      <Info>
        <Icon>
          <IconButton onClick={()=>addItem(items)}>
          <ShoppingCartOutlinedIcon/>
          </IconButton>
        </Icon>
        <Icon>
          <SearchOutlinedIcon/>
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon/>
        </Icon>
      </Info>
      
      <Price>Rs:{price}</Price>
      
    </Container>
    
  )
}
