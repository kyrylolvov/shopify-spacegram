import React from "react";

import { createGlobalStyle } from "styled-components";

import GlobalContainer from "./GlobalContainer";
import Feed from "./Feed";

const GlobalStyle = createGlobalStyle`
    html, body{
        margin: 0;
        background-color: #fafafa;
        display: flex;
        justify-content: center;
    }
`;

const App: React.FC = () => (
  <GlobalContainer>
    <GlobalStyle />
    <Feed />
  </GlobalContainer>
);

export default App;
