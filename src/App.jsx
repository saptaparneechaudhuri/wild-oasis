import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />

      <H1>The Wild Oasis</H1>
    </>
  );
};

export default App;
