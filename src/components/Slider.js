import { ArrowLeftOutlined, ArrowRightRounded } from "@mui/icons-material"
import { Slideritem } from "../pages/Slideritem"
import styled from "styled-components"
import { useState } from "react"

const Container=styled.div`
width:100%;
height:100vh;
display:flex;
overflow:hidden;
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
left:${(props)=>props.direction==="left" &&"10px"};
right:${(props)=>props.direction==="right" &&"10px"};
cursor:pointer;
opacity:0.5;
z-index:2;
`
const Wrapper=styled.div`
height:100%;
display:flex;
transition:all 1.5s ease;
transform:translateX(${(props)=>props.slideshow *-100}vw)`
const Slide=styled.div`
width:100vw;
height:100vh;
display:flex;

background-color:${(props)=>props.bg};
align-items:center;`
const ImageContainer=styled.div`
height:100%;
width:60%;`
const Info=styled.div`
display:flex;
flex-direction:column;
height:60%;
width:60%;
padding:10px;
margin-top:100px`
const Image=styled.img`
height:80%;
`;
const Title=styled.h1`
font-size:70px;

margin-top:0px;
margin-bottom:0px;
text-align:left;`
const Description=styled.p`
font-size:20px;
font-weight:400;
letter-spacing:3px;
text-align:left;`
const Button=styled.button`
align-items:flex-start;
padding:10px;
width:150px;
font-size:20px;
background-color:transparent;
cursor:pointer`
export default function Slider(){
    
    const handleClick=(direction)=>{
        if(direction==="left"){
            setSlideshow(slideshow>0?slideshow-1:2)
        }else{
            setSlideshow(slideshow<2?slideshow+1:0)
        }
    }
    const [slideshow,setSlideshow]=useState(0)
    return(
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined style={{alignItems:"center",paddingTop:"11px"}}/>
            </Arrow>
            <Wrapper slideshow={slideshow}>
                {Slideritem.map((a)=>(
 <Slide bg={a.bg} key={a.id} style={{backgroundColor:"{a.bg}"}}>
 <ImageContainer>
     <Image src={a.img}/>
 </ImageContainer>
 <Info>
     <Title>{a.title}</Title>
     <Description>{a.description}</Description>
     <Button>SHOP NOW</Button>
 </Info>
 </Slide>
                ))}
              
            </Wrapper>
            <Arrow direction="right"onClick={()=>handleClick("right")}>
                <ArrowRightRounded style={{alignItems:"center",paddingTop:"11px"}}/>
            </Arrow>
        </Container>
    )
}