import React from "react";
import { Container, Wrapper } from "./style";
import Project from "../../components/Project";
import Experience from "../../components/Experience";

export default function PortfolioPage() {
  return (
    <Container>
      <Wrapper>
        <Project />
      </Wrapper>
      <Wrapper experience>
        <Experience />
      </Wrapper>
    </Container>
  );
}
