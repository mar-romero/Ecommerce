import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footers";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useDispatch} from "react-redux";
import { useLocation } from "react-router";
import {removeProduct} from "../redux/cartRedux";
import {mpPayment} from "../redux/apiCalls.js"
import { useEffect} from "react";
import { publicRequest } from "../requestMethods";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin:0px 48px 0px -34px
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItem2 = styled.div`
margin: 250px 0px 35px 0px;
display: flex;
justify-content: space-between;
font-weight: ${(props) => props.type === "total" && "500"};
font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
const ButtonRemove = styled.button`
  padding: 15px 0px;
  width:150px;
  border: 2px solid #F1C0E8;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #F1C0E8;
    color:white;
  }
`;

const Cart = () => {
  const cart = useSelector(state=> state.cart)
  const quantity = useSelector(state => state.cart.quantity);
  const total  = useSelector(state =>state.cart.total);
  const dispatch = useDispatch();
  const handleRemoveProduct = (productt) => {
    dispatch(
      removeProduct(productt)
    );
  };
  const handleMp = (e) => {
    e.preventDefault();
    console.log(total);
    mpPayment(dispatch, { total });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>TU CARRITO</Title>
        <Top>
          <TopButton>CONTINUAR COMPRANDO</TopButton>
          <TopTexts>
            <TopText  >Carrito ({quantity})</TopText>
            <TopText>Mis deseos (0)</TopText>
          </TopTexts>
          <TopButton type="filled">COMPRAR</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) =>(
            <Product>
              <ProductDetail>
                <Image src={product.img} />
                <Details>
                  <ProductName>
                    <b>Producto:</b> {product.title}
                  </ProductName>
                  <ProductSize>
                    <b>Cantidad:</b> {product.quantity}
                  </ProductSize>
                  <ProductSize>
                    <b>Peso:</b> {product.size}
                  </ProductSize>
                  <ButtonRemove onClick={()=>handleRemoveProduct(product)} >Eliminar</ButtonRemove>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                </ProductAmountContainer>
                <ProductPrice>$ {product.price*product.quantity}</ProductPrice>
              </PriceDetail>
            </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>CARRITO</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
              </SummaryItem>
            <SummaryItem2 type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem2>
            <Button onClick={handleMp}>COMPRAR</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;