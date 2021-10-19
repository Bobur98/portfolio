import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ResumePage from "../view/ResumePage";
import PortfolioPage from "../view/PortfolioPage";
import ContactPage from "../view/ContactPage";
import Projects from "../components/Projects";
import Home from "./home.jsx";
import Logo from "../components/Logo";

export default function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path="/resume" exact component={ResumePage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/projects" component={Projects} />
        <Route path="/" exact component={Home} />
        <Route path="/" exact component={Logo} />
      </Switch>
      <Footer />
    </Router>
  );
}
