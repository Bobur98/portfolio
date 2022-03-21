import React from 'react';
// import Navbar from "../../components/Navbar";
import { Container, Name, Wrapper } from './style';

export default function Home() {
  return (
    <Container>
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
    </Container>
  );
}
