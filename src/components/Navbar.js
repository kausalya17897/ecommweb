import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
const Container=styled.div`
height:60px;
`
const Wrapper=styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
`
const Left=styled.div`
flex:1;
display:flex;
align-item:center;
padding-top:5px;
`
const Language=styled.span`
font-size:14px;
cursor:pointer;
padding-top:5px;
`
const SearchContainer=styled.div`
border:0.5px solid lightgray;
display:flex;
height:25px;
align-items:center;
margin-left:2px;
padding:5px;
`
const Logo=styled.h1`
margin-top:0px;
margin-bottom:0px;
font-weight:bold;`
const Input=styled.input`
border:none;
`
const Center=styled.div`
text-align:center;
flex:1;
`
const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
height:60px;
`
const MenuItem=styled.div`
font-size:14px;
cursor:pointer;
margin:25px;`
export default function Navbar() {
   
  return (
    
        <Container>
          <Wrapper>
             <Left>
                 <Language>EN</Language>
                 <SearchContainer>
                 <Input/>
                  <SearchIcon style={{color:"gray",fontSize:"18px"}}/>   
                 
                 </SearchContainer>
             </Left>
             <Center><Logo>Shoppify.</Logo></Center>
             <Right>
                 <MenuItem>REGISTER</MenuItem>
                 <MenuItem>LOGIN</MenuItem>
                 <MenuItem>
                 <IconButton>
       <FavoriteBorderOutlinedIcon/>
       
    </IconButton>
             <IconButton aria-label="cart">
             <Badge badgeContent={4} color="success">
        <ShoppingBagOutlinedIcon style={{fontSize:"25px"}} />
      </Badge>
    </IconButton>
    
    </MenuItem>
             </Right>
          </Wrapper>  
        </Container>
        
    
  )
}
