import React from 'react';
import { Element } from 'react-scroll';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import Skills from './Components/Skills/Skills';
import Services from './Components/Services/Services';
import ButtonData from './Components/Data/Data';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <ButtonData>
      <Element name="Header">
        <Header/>
      </Element>
      <Element name="Home">
        <Home />
      </Element>
      <Element name="About">
        <About />
      </Element>
      <Element name="Services">
        <Services />
      </Element>
      <Element name="Portfolio">
        <Portfolio />
      </Element>
      <Element name="Skills">
        <Skills />
      </Element>
      <Element name="Contact">
        <Contact />
      </Element>
      <Footer/>
    </ButtonData>
  );
};

export default App;
