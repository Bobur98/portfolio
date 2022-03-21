import React from 'react';
import { Container, Line, Wrapper, Text, LogoWrapper, Button } from './style';
import Logo from '../Logo';
import { data } from '../../mock/resumeData';
import MyResume from './resume.pdf';

export default function Resume() {
  return (
    <Container>
      <Line>
        <Wrapper>
          <LogoWrapper>
            <Logo center />
          </LogoWrapper>
          {data.map((value, id) => (
            <Text key={id}>{value.title}</Text>
          ))}
          <a href={MyResume} target="_blank" rel="noopener noreferrer" download>
            <Button>DOWNLOAD RESUME</Button>
          </a>
        </Wrapper>
      </Line>
    </Container>
  );
}
