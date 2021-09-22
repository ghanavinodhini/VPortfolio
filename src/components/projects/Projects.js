import React from 'react'
import "./Projects.css";
import GuessColors from "../../images/GuessColors.png";
import HomeClean from "../../images/HederaHelix.png";
import TicTacToe from "../../images/TicTacToe.png";
import ShoppingList from "../../images/ShoppingList.png";
import DogCare from "../../images/DoggyCare.png";
import MovieShop from "../../images/movielogo.png";
import BookFinder from "../../images/BookFinder.png"; 
import SchoolProjects from './schoolProjects/SchoolProjects';
import { Element } from 'react-scroll';
import { Movie } from '@material-ui/icons';

export default function Projects() {
    const school_projects = [
        {
            img: GuessColors,
            title:"Guess Colors-Quiz",
            desc: "Kids game to find colors of fruits,flowers.",
            link: "https://github.com/ghanavinodhini/QuizApplication"
        },
        {
            img: HomeClean,
            title:"HomeClean",
            desc: "Home Clean Android application developed for HederaHelix AB.",
            link: "https://github.com/ghanavinodhini/HomeCleanApp"
        },
        {
            img: TicTacToe,
            title:"TicTacToe",
            desc: "A game in Swift language to fill X and O aligned vertical or horizontal.",
            link: "https://github.com/ghanavinodhini/TicTacSwiftApp"
        },
        {
            img: ShoppingList,
            title:"Shopping List",
            desc: "An application developed in SwiftUI with Speech Recognition AI to dictate items list.",
            link: "https://github.com/ghanavinodhini/ShoppingListApp"
        },
        {
            img: DogCare,
            title:"Doggy DayCare",
            desc: "A ReactJS application using dogs daycare api to list the customers.",
            link: "https://github.com/ghanavinodhini/DogCare"
        },
        {
            img: MovieShop,
            title:"MovieShop",
            desc: "A ReactJS application to shop movies and add in cart and favourites.",
            link: "https://github.com/WALMIN/MovieShop"
        },
        {
            img: BookFinder,
            title:"Books Finder",
            desc: "A React Native application using open library api to find books by title and view book details",
            link: "https://github.com/ghanavinodhini/BookFinderApp"
        }

    ]

    return(
        <Element className="projects" id="projects">
            <h2>Projects</h2>
            <p> A list of all projects developed in school using different technologies(Kotlin, Swift,SwiftUI,ReactJS,React Native)</p>
            <div className="projectsContainer__projects">
            {
                school_projects.map((project,index)=>{
                    return(
                        <SchoolProjects key={index} img={project.img} title={project.title} desc={project.desc} link={project.link} />
                    )
                })
            }
            </div>
        </Element>
    );
}
