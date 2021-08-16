import React, {useState}from 'react'
import "./Projects.css";
import VinoPhoto from "../../images/vino_photo.png";
import Hedera from './hedera/Hedera';
export default function Projects() {
    const [isOpen, setisOpen] = useState(false);
    function handleEvent() {
        setisOpen(true);
       
       console.log("Hedera Open");
       console.log({isOpen});
    }
    return (
        <div className="projects">
            <h4><u>Projects</u></h4>
            <div className="projects__tab">
                
                <div className="projects__tile" onClick={handleEvent}>
                    <h5>Hedera Helix</h5>
                    <img src = {VinoPhoto}/>
                    <p>
                    Myself Ghana Vinodhini, freelance software developer working Android and ReactJs Projects.
                    </p>
                </div>
                <div className="projects__tile">
                    <h5>Hedera Helix</h5>
                    <img src = {VinoPhoto}/>
                    <p>
                    Myself Ghana Vinodhini, freelance software developer working Android and ReactJs Projects.
                    </p>
                </div>
                <div className="projects__tile">
                    <h5>Hedera Helix</h5>
                    <img src = {VinoPhoto}/>
                    <p>
                    Myself Ghana Vinodhini, freelance software developer working Android and ReactJs Projects.
                    </p>
                </div>
            </div>
            
        </div>
    )
}
