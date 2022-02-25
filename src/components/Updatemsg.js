import React from 'react'
import styled from 'styled-components'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Container=styled.div`
height:60vh;
background-color:#EEEBE3;
`
const Title=styled.h1`
margin-bottom:20px
`
const Description=styled.div`
font-size:24px;
margin-bottom:40px
`
const InputContainer=styled.div`
width:50%;
height:38px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid gray;
margin-left:400px;
`
const Input=styled.input`
border:none;
flex:8;
padding-left:20px;
`
const Button=styled.button`
flex:1
`
export default function Updatemsg() {
  return (
    <Container>
        <Title>News Info</Title>
        <Description>Get timely updates from your favourite brand</Description>
        <InputContainer>
        <Input placeholder='Your email' type="email"/>
        <Button>
        <SendOutlinedIcon/>
        </Button>
            </InputContainer>
    </Container>
  )
}
