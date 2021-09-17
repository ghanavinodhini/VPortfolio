import React from 'react'
import {Element} from 'react-scroll';
import { LinearProgress } from '@material-ui/core';
import './Skills.css';

 function Skills() {
    return (
        <Element className="skills" id="skills">
            <div className="mySkills__container">
                <h2>MY SKILLS</h2>
            </div>
            <div className="skillContainer__text">
                <div className="skillContainer__skillset">
                    <h5>ReactJS</h5>
                    <div className="skillContainer__slider skillContainer__slider1">
                        <LinearProgress variant="determinate" value={70} />
                    </div>
                </div>
                <div className="skillContainer__skillset">
                    <h5>React Native</h5>
                    <div className="skillContainer__slider skillContainer__slider2">
                        <LinearProgress variant="determinate" value={50} />
                    </div>
                </div>
                <div className="skillContainer__skillset">
                    <h5>Kotlin</h5>
                    <div className="skillContainer__slider skillContainer__slider3">
                        <LinearProgress variant="determinate" value={70} />
                    </div>
                </div>
                <div className="skillContainer__skillset">
                    <h5>Swift, SwiftUI</h5>
                    <div className="skillContainer__slider skillContainer__slider4">
                        <LinearProgress variant="determinate" value={70} />
                    </div>
                </div>
                <div className="skillContainer__skillset">
                    <h5>Firebase</h5>
                    <div className="skillContainer__slider skillContainer__slider5">
                        <LinearProgress variant="determinate" value={70} />
                    </div>
                </div>
                <div className="skillContainer__skillset">
                    <h5>Selenium</h5>
                    <div className="skillContainer__slider skillContainer__slider6">
                        <LinearProgress variant="determinate" value={60} />
                    </div>
                </div>
                    
               
            </div>
        </Element>
    )
}

export default Skills;
