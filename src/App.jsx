import React from 'react';
import { Element } from 'react-scroll';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';


const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      {/* Add more sections as needed */}
    </div>
  );
};

export default App;
