import React, {useState} from 'react';
import { Card, CardMedia, CardContent,CardActionArea, Grid, Grow, Typography } from '@material-ui/core';
import {Tabs} from '@material-ui/core';
import { Tab } from '@material-ui/core';
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


export default function Projects() {
    const school_projects = [
        {
            tag: "school Projects",
            img: GuessColors,
            title:"Guess Colors-Quiz",
            desc: "Kids game to find colors of fruits,flowers.",
            link: "https://github.com/ghanavinodhini/QuizApplication"
        },
        {
            tag: "client Projects",
            img: HomeClean,
            title:"HomeClean",
            desc: "Home Clean Android application developed for HederaHelix AB.",
            link: "https://github.com/ghanavinodhini/HomeCleanApp"
        },
        {
            tag: "school Projects",
            img: TicTacToe,
            title:"TicTacToe",
            desc: "A game in Swift language to fill X and O aligned vertical or horizontal.",
            link: "https://github.com/ghanavinodhini/TicTacSwiftApp"
        },
        {
            tag: "school Projects",
            img: ShoppingList,
            title:"Shopping List",
            desc: "An application developed in SwiftUI with Speech Recognition AI to dictate items list.",
            link: "https://github.com/ghanavinodhini/ShoppingListApp"
        },
        {
            tag: "school Projects",
            img: DogCare,
            title:"Doggy DayCare",
            desc: "A ReactJS application using dogs daycare api to list the customers.",
            link: "https://github.com/ghanavinodhini/DogCare"
        },
        {
            tag: "school Projects",
            img: MovieShop,
            title:"MovieShop",
            desc: "A ReactJS application to shop movies and add in cart and favourites.",
            link: "https://github.com/WALMIN/MovieShop"
        },
        {
            tag: "school Projects",
            img: BookFinder,
            title:"Books Finder",
            desc: "A React Native application using open library api to find books by title and view book details",
            link: "https://github.com/ghanavinodhini/BookFinderApp"
        },
        {
            tag: "client Projects",
            img: BookFinder,
            title:"Carelyo",
            desc: "A ReactJS web application used in Nigera for digital healthcare system",
            link: "https://github.com/ghanavinodhini/BookFinderApp"
        }

    ]

    const [tabValue,setTabValue] = useState('All');
    
    return(
        <Element className="projects" id="projects">
            <Grid container className="section" direction="column" item xs={12} align="center">
                <Grid item className="section_title">
                    <h2 className="section_title_text">PROJECTS</h2>
                    <p> A list of all projects developed in school using different technologies(Kotlin, Swift,SwiftUI,ReactJS,React Native)</p>
                </Grid>
                {/* Tabs */}
                <Grid item xs={12}>
                    <Tabs 
                    value={tabValue}  
                    className="custom_tabs" 
                    onChange={(event,newValue) => setTabValue(newValue)}>    
                        <Tab label='All' value="All" className={tabValue == 'All' ? 'customTabs_item active' : 'customTabs_item'} />
                    {/*1. Creating array, 2. Array has Set elements, 3. Set is going to have all tags, 4. Set ignores repeated tag elements*/}
                    {[...new Set(school_projects.map((project) => project.tag))].map((tag)=>(
                        <Tab 
                        label={tag} 
                        value={tag}
                        className={tabValue == 'All' ? 'customTabs_item active' : 'customTabs_item'}
                        />
                    ))}
                    </Tabs>
                </Grid>
                {/* Projects */}
                <Grid item>
                    <Grid container item xs={12} align="center" className="projectsContainer__projects">
                        {school_projects.map((project,index)=>
                        <>
                        {tabValue == project.tag || tabValue == 'All' ?  
                            (
                            
                                <Grid Item align="center">
                                    <Grow in timeout={1000}>
                                    <Card className="customCard">
                                    <SchoolProjects key={index} img={project.img} title={project.title} desc={project.desc} link={project.link} />
                                    </Card>
                                    </Grow>
                                </Grid>
                            ) : null
                            }
                        </>    
                        )}
                    </Grid>
                </Grid>
            </Grid>
           {/*  <h2>PROJECTS</h2>
            <p> A list of all projects developed in school using different technologies(Kotlin, Swift,SwiftUI,ReactJS,React Native)</p>
            <div className="projectsContainer__projects">
            {
                school_projects.map((project,index)=>{
                    return(
                        <SchoolProjects key={index} img={project.img} title={project.title} desc={project.desc} link={project.link} />
                    )
                })
            }
            </div> */}
        </Element>
    );
}
