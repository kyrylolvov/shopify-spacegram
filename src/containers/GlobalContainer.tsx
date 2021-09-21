import React from "react";
import styled from "styled-components";

const GlobalContainer: React.FC = ({ children }) => {
  return <GlobalContainerStyled>{children}</GlobalContainerStyled>;
};

const GlobalContainerStyled = styled.div`
  max-width: 768px;
  padding: 30px 50px;
  font-family: "Poppins", sans-serif;

  @media (max-width: 425px) {
    padding: 20px 15px;
  }
`;

export default GlobalContainer;
