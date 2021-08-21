import React from "react";
// import Navbar from "../../components/Navbar";
import { Container, Name, Wrapper, MainWrapper } from "./style";

export default function Home() {
  return (
    <Container>
      <MainWrapper>
        <Wrapper>
          <Name>
            I<span>'</span>m
          </Name>
          <Name>Bobur</Name>
          <Name>
            Muhibullaev<span>.</span>
          </Name>
          <Name status>WEB DEVELOPER</Name>
        </Wrapper>
      </MainWrapper>
    </Container>
  );
}
