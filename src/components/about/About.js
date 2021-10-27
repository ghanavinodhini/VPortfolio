import React,{useEffect,useRef} from 'react';
import { Element } from 'react-scroll';
import VinoPhoto from "../../images/vino_photo.png";
import './About.css';
//import {init} from 'ityped';

function About() {

   /*  const textRef = useRef();

    useEffect(()=>{
        init(textRef.current,{
            showCursor:false,
            backDelay:1500,
            strings:["Frontend Web/Mobile Developer","QA Tester"],
        });
    },[]); */

    return (
            <Element className="about" id="about">
                <div className="left"></div>
                <div className="imgContainer">
                    <img className="myImage" src={VinoPhoto}  alt="Ghana" />
                </div>
                <div className="right"></div>
                <div className="wrapper">
                    <h2> Hi, I am</h2>
                    <h1>Ghanavinodhini Chandrasekaran</h1>
                    <h3> Application Developer </h3>
                        {/* <span ref={textRef}></span> */}
                <div className="aboutMe__text">
                    <p>I am an experienced software professional with about 5 years of experience in IT industry.  
                        My experience in analysing and testing different applications brought passion towards developing mobile/web applications.
                    </p>
                </div>
                    <button className="download__cv">
                        <a href="https://drive.google.com/drive/folders/1pN8LRpXcWz-dZBPugi3TTnCyCTL-BdMS">Download CV</a>
                    </button>   
                </div>
                
            </Element>   
    )
}

export default About;

