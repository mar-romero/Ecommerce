import SendSharpIcon from '@mui/icons-material/SendSharp';
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #CFBAF0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ width: "103%" })}
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 39px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #F1C0E8;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Novedades</Title>
      <Desc>Obtenga información de las ofertas o promociones</Desc>
      <InputContainer>
        <Input placeholder="Tu Mail" />
        <Button>
          <SendSharpIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;