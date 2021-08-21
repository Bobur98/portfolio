import React from "react";
import { Container, Text, Wrapper } from "./style";
import Logo from "../Logo";

const Footer = () => {
  return (
    <Container>
      <Text>
        <Wrapper>
          <Logo />
        </Wrapper>{" "}
        ©{new Date().getFullYear()} by Bobur Muhibullaev.
      </Text>
    </Container>
  );
};

export default Footer;
