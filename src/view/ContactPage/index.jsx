import React from 'react';
import { Container, Wrapper } from './style';
import Contact from '../../components/Contact';
// const Contact = lazy(() => import('../../components/Contact'));
const ContactPage = () => {
  return (
    <Container>
      <Wrapper>
        <Contact />
      </Wrapper>
    </Container>
  );
};

export default ContactPage;
