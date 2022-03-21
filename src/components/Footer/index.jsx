import React from 'react';
import { Container, Wrapper } from './style';
import Logo from '../Logo';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />
      </Wrapper>{' '}
      ©{new Date().getFullYear()} by Bobur Muhibullaev.
    </Container>
  );
};

export default Footer;
