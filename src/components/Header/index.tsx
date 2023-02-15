import React from "react";
import { Container, LogoContainer, TitleContainer } from "./styles";

function Header() {
  return (
    <Container>
      <LogoContainer>
        <img
          src="https://dog.ceo/img/dog-api-logo.svg"
          alt="Min's Dog Finder App"
        />
      </LogoContainer>
      <TitleContainer>
        <h1>Min's Dog Image Finder App</h1>
      </TitleContainer>
    </Container>
  );
}

export default Header;
