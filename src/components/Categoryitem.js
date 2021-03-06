import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { mobile } from "../responsive";
const Container=styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
${mobile({ height: "20vh" })}
`
const Image=styled.img`
width:100%;
height:100%;
object-fit:cover;

`
const Info=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`
const Title=styled.h1`
color:white;
margin-bottom:20px;`
const Button=styled.button`
border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;
${mobile({ height: "20vh" })}
`


export default function Categoryitem({a}) {
  console.log("cat",a);
  const history=useHistory();
  return (
    <Container>
      <Image src={a.img}/>
      <Info>
          <Title>{a.title}</Title>
          <Button onClick={()=>history.push("/shirts")}>SHOP NOW</Button>
      </Info>
    </Container>
  )
}
