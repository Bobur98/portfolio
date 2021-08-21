import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Container } from "./style";
import Headings from "../Headings";
import { Experience } from "../../mock/experience";

export default function index() {
  return (
    <Container>
      <Headings className="heading" number={"03"} title={"Experience"} />
      <VerticalTimeline>
        {Experience.map((value) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              num={value.num}
              key={value.id}
              iconStyle={{
                background: "#32cd32",
                color: "#32cd32",
                boxShadow: "none",
                height: "12px",
                width: "12px",
                marginLeft: "-7.4px",
              }}
              contentArrowStyle={{ borderRight: "0" }}
            >
              <h3 className="vertical-timeline-element-title">{value.name}</h3>
              <h5 className="vertical-timeline-element-subtitle">
                {value.status}
              </h5>
              <p num={value.index} id="description">
                {value.description}
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Container>
  );
}
