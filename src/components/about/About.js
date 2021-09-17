import React,{useEffect,useRef} from 'react';
import { Element } from 'react-scroll';
import VinoPhoto from "../../images/vino_photo.png";
import './About.css';
import {init} from 'ityped';

function About() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current,{
            showCursor:false,
            backDelay:1500,
            strings:["Mobile Developer","QA Tester"],
        });
    },[]);

    return (
            <div className="about" id="about">
                <div className="left"></div>
                <div className="imgContainer">
                    <img src={VinoPhoto}  alt="Ghana" />
                </div>
                <div className="right"></div>
                <div className="wrapper">
                    <h2> Hi, I'm</h2>
                    <h1>Ghanavinodhini Chandrasekaran</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                    <button className="download__cv"><a href="www.google.com">Download CV</a></button>   
                </div>
            </div>
                
       
    )
}

export default About;
