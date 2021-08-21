import React from "react";
import { Container, Title } from "./style";

export default function Headings(props) {
  return (
    <Container>
      <Title>
        <span>{props.number}</span>
        {props.title}
      </Title>
      <Title status>{props.status}</Title>
    </Container>
  );
}
