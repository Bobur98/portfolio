import React from "react";
import { Container, LogoB, LogoWrapper } from "./style";

export default function Logo(props) {
  return (
    <Container>
      <LogoWrapper center={props.center} className="logo logo--navbar">
        <LogoB center={props.center} className="logo--B-navbar logo--B">
          B
        </LogoB>
      </LogoWrapper>
    </Container>
  );
}
