import React from 'react';
import { ProjectData } from '../../mock/projectData';
import {
  Button,
  Container,
  Description,
  ProjectImg,
  Wrapper,
  ProjectVideo,
} from './style';
import Headings from '../Headings';

const Projects = () => {
  return (
    <Container>
      <Headings title={'My latest works'} />
      {ProjectData.map((value, _) => (
        <Wrapper key={value.id}>
          {value?.src.includes('jpg') ? (
            <ProjectImg src={value?.src.slice(0, -3)} alt="project imgs" />
          ) : (
            <ProjectVideo loop autoplay controls muted>
              <source src={value?.src} type="video/mp4" alt="project videos" />
            </ProjectVideo>
          )}

          <Description>{value.description}</Description>

          <Button first href={value.site}>
            Website
          </Button>
          <Button href={value.github}>GitHub</Button>
        </Wrapper>
      ))}
    </Container>
  );
};

export default Projects;
