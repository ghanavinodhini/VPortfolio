import React from 'react';
import './Homepage.css';
import Projects from "../projects/Projects";
import About from '../about/About';
import Skills from '../skills/Skills';
import Experiences from '../experiences/Experiences';
import Contact from '../contact/Contact';

function Homepage() {
    return(
        <div className="homepage__sections" id="/">
            <About />
            <Projects />
            <Skills />
            <Experiences />
            <Contact />
        </div>
    );
}

export default Homepage;