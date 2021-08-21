import React from "react";
import { Container, Wrapper } from "./style";
import Resume from "../../components/Resume";
import Headings from "../../components/Headings";
import KnowledgeLevel from "../../components/KnowledgeLevel";

export default function ResumePage() {
  return (
    <Container>
      <Wrapper>
        <Resume />
      </Wrapper>
      <Wrapper heading>
        <Headings
          number={"01"}
          title={"professional"}
          status={"my knowledge level in software"}
        />
      </Wrapper>
      <Wrapper>
        <KnowledgeLevel />
      </Wrapper>
    </Container>
  );
}
