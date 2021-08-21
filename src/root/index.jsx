import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import HomePage from '../view/HomePage';
import ResumePage from '../view/ResumePage';
import PortfolioPage from '../view/PortfolioPage';
import ContactPage from '../view/ContactPage';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Projects from '../components/Projects';
import Home from './home.jsx';

export default function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path='/resume' exact component={ResumePage} />
        <Route path='/portfolio' component={PortfolioPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/projetcs' component={Projects} />
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />

      {/* <Projects /> */}
    </Router>
  );
}
