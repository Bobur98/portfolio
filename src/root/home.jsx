import React from "react";
import HomePage from "../view/HomePage";
import ResumePage from "../view/ResumePage";
import PortfolioPage from "../view/PortfolioPage";
import ContactPage from "../view/ContactPage";
import { Element } from "react-scroll";
export default function App() {
  return (
    <>
      <Element name="/home">
        <HomePage />
      </Element>
      <Element name="/resume">
        <ResumePage />
      </Element>
      <Element name="/portfolio">
        <PortfolioPage />
      </Element>
      <Element name="/contact">
        <ContactPage />
      </Element>
    </>
  );
}
