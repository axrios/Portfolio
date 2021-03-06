import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Contact from './pages/contact';
import Footer from './pages/footerBar';

import React from "react";

function App() {
  return (
    <div className="App">
      <Home/>
      <div id = 'body'>
        <About />
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
