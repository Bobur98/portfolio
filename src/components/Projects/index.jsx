import React from "react";
import { ProjectData } from "../../mock/projectData";
import { Button, Container, Description, ProjectImg, Wrapper } from "./style";
import Headings from "../Headings";

const Projects = () => {
  return (
    <Container>
      <Headings title={"My latest works"} />
      {ProjectData.map((value, _) => (
        <Wrapper key={value.id}>
          <ProjectImg src={value?.src} />
          <Description>{value.description}</Description>
          <Button href={value.site}>Visit site</Button>
          <Button href={value.github}>GitHub</Button>
        </Wrapper>
      ))}
    </Container>
  );
};

export default Projects;
