import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  ProjectWrapper,
  ProjectItem,
  Button,
  BtnWrapper,
} from "./style";
import Headings from "../Headings";
import { ProjectData } from "../../mock/projectData";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Project() {
  let history = useHistory();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const items = ProjectData.slice(0, 3);
  return (
    <Container data-aos="fade-up">
      <BtnWrapper>
        <Headings
          number={"02"}
          title={"portfolio"}
          status={"my latest work."}
        />
        <Button
          onClick={() => {
            history.push("/projects");
          }}
        >
          {" "}
          see more{" "}
        </Button>
      </BtnWrapper>

      <ProjectWrapper className="portfolio-container">
        {items.map((value, index) => (
          <ProjectItem key={index} src={value?.src} />
        ))}
      </ProjectWrapper>
    </Container>
  );
}