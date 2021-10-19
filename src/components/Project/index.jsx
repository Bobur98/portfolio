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

  // const ClickHandler = () =>{

  // }
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
          // to="/projects"
        >
          {" "}
          see more{" "}
        </Button>
      </BtnWrapper>

      <ProjectWrapper className="portfolio-container">
        {items.map((value, index) => (
          <a href={value?.site}>
            <ProjectItem key={index} src={value?.src} />
          </a>
        ))}
      </ProjectWrapper>
    </Container>
  );
}
