import React from 'react';
import './Homepage.css';
import VinoPhoto from "../../images/vino_photo.png";
import Projects from "../projects/Projects";
import Footer from '../../footer/Footer';
function Homepage() {
    return(
        <>
        <div className="homepage">            
                <h4 className="homepage__aboutme">About</h4>
                <div className="homepage__about">
                    <div className="homepage__aboutimg">
                    <img src={VinoPhoto}  alt="" />
                    </div>
                    <div className="homepage__aboutdetail">
                    <p>
                    Myself <b><i>Ghana Vinodhini</i></b>, freelance software developer working Android and ReactJs Projects.
                    This build pipeline is not exactly what you would call "production ready" but it does give a solid
                    start for you to add on to it the things that you need in order to get the development experience
                    you're looking for. The approach that some people take (including myself at times) is to take a fully
                    built up pipeline of Yeoman.io or somewhere else and then strip off the things they don't want until
                    it suits there style. There's nothing wrong with this but perhaps with the example above you could
                    opt for the opposite approach.                     
                </p>                
                </div>                
                </div>
                <hr/>
                <div className="homepage__exp">
                    <h4>Professinoal Experience</h4>
                    
                </div>
                <hr/>
                <Projects />
                <Footer />
           
        </div>
        </>
    );
}

export default Homepage;