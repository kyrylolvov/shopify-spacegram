import React from "react";
import styled from "styled-components";

import TriangleIcon from "./common/TriangleIcon";

const Logo: React.FC = () => (
  <LogoContainer>
    <TriangleIcon />
    <LogoText>spacegram</LogoText>
  </LogoContainer>
);

const LogoText = styled.p`
  margin: 0;
  color: #eb5757;
  font-weight: 700;
  margin-left: 5px;
`;

const LogoContainer = styled.div`
  display: flex;
`;

export default Logo;
