import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";


const Container = styled.div`
flex:1;
margin: 3px;
height: 70vh;
position: relative;
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit:cover;
${mobile({ height: "20vh" })}
`;
/*object-fit:cover; Recorta la imagen para que cubra el 100%*/ 


const Info = styled.div`
position: absolute;
top:0;
left:0;
width: 100%;
height: 100%;
display:flex;
color:#0000;
align-items: center;
justify-content: center;
flex-direction:column;

`;

const Title = styled.h1`
 color: white;
 margin-buttom:25px;
`;


const Button = styled.button`
border:none;
padding:10px;
background-color: #fff7f7;
color:gray;
cursor:pointer;
font-weight: 600;
margin-top:25px;
`;

const Categories = ({ item }) => {
  return (
    <Container>
      <Link to ={`/products/${item.cat}`}>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>Ver</Button>
      </Info>
      </Link>
  
    </Container>
  );
};

export default Categories;
