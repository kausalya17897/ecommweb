import { ArrowLeftOutlined, ArrowRightRounded } from "@mui/icons-material"
import { imageListClasses } from "@mui/material"
import styled from "styled-components"

const Container=styled.div`
width:100%;
height:100vh;
display:flex;

position:relative
`
const Arrow=styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
align-items:center;
justify-content:center;
position:absolute;
top:0;
margin:auto;
bottom:0;
left:${props=>props.direction==="left" &&"10px"};
right:${props=>props.direction==="right" &&"10px"};
cursor:pointer;
opacity:0.5;
`
const Wrapper=styled.div`
height:100%;`
const Slide=styled.div`
display:flex;
align-items:center`
const ImageContainer=styled.div`
flex:1;`
const Info=styled.div`
flex:1;`
const Image=styled.img`
`;

export default function Slider(){
    return(
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined style={{alignItems:"center",paddingTop:"11px"}}/>
            </Arrow>
            <Wrapper>
                <Slide>
              <ImageContainer>
                  <img src="./Image/image2.jpg" alt="dsd"/>
              </ImageContainer>
              <Info>

              </Info>
              </Slide>
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightRounded style={{alignItems:"center",paddingTop:"11px"}}/>
            </Arrow>
        </Container>
    )
}