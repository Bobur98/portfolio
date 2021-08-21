import React, { useEffect } from 'react';
import HomePage from '../view/HomePage';
import ResumePage from '../view/ResumePage';
import PortfolioPage from '../view/PortfolioPage';
import ContactPage from '../view/ContactPage';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Element } from 'react-scroll';
export default function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Element name='/home'>
        <HomePage />
      </Element>
      <Element name='/resume'>
        <ResumePage />
      </Element>
      <Element name='/portfolio'>
        <PortfolioPage />
      </Element>
      <Element name='/contact'>
        <ContactPage />
      </Element>
    </>
  );
}
