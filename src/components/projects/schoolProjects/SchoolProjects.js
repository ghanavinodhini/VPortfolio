import React,{useState} from 'react'
import "./SchoolProjects.css";
import Projects from '../Projects';
/* import GuessColors from "../../images/GuessColors.png";
import HomeClean from "../../images/HederaHelix.png";
import TicTacToe from "../../images/TicTacToe.png";
import ShoppingList from "../../images/GuessColors.png";
import DogCare from "../../images/DoggyCare.png";
import MovieShop from "../../images/movielogo.png";
import BookFinder from "../../images/BookFinder.png"; */

export default function SchoolProjects({img,title,desc,link}) { 
    const [show,setShow] = useState(false);   
    return (

        <a href={link} className="project__link">
            <div className="project" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            {
                show ? (
                    <div className="project__content">
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                )   : (
                    <img src={img} alt="" />
                    // <img src={require('../../images/' + {img} + '.png')} alt="" />
                )
            }
            </div>
        </a>
        
    )
}
