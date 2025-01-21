import Header from "./header";
import Button from "./button";
import Grid from "./Grid";
import { useState } from "react";

import Catractimg from "../assets/ai_img/catract_eye.webp"
import drone from "../assets/ai_img/drone.png"
import chatb from "../assets/ai_img/chatbot.png"
import papilledema from "../assets/ai_img/papilledema.webp"

import Portfolio from "../assets/web_img/portfolio.png"
import dice from "../assets/web_img/dice.png"
import drum from "../assets/web_img/play.png"
import bank from "../assets/web_img/bank.png"

import "./project.css";
const ai_project = [
    {
        key: 1,
        title:"Papilledema-Pseudopapilledma",
        img: papilledema,
        description: "This is a Deep Learning project built using CNN (Convolutional Neural Networks). It predicts whether the user has papilledema or pseudopapilledema in their eye.It is designed to assist healthcare professionals by providing quick and reliable predictions."
    },
    {
        key: 2,
        title:"Catract Eye Prediction",
        img: Catractimg,
        description: "This is a Deep Learning project built using CNN (Convolutional Neural Networks). It predicts whether the user has cataracts or a healthy eye condition, enabling early detection and effective treatment planning."
    },
    {
        key: 3,
        title:"Drone Intruder Detection",
        img: drone,
        description: "The Drone Intruder Detection project, developed using CNN and Gazebo (a drone simulation environment), identifies the number of people present and determines their locations within the monitored area."
    },
    {
        key: 4,
        title:"Rag - Based Healthcare Chat Bot",
        img: chatb,
        description: "The RAG Care healthcare chatbot, developed using RAG and the Gemini API key, is trained on medical textbook PDFs. It provides accurate and relevant answers based on the information from the medical texts."
    }
];

const web_dev_project = [
    {
        key: 1,
        title:"My Portfolio",
        img: Portfolio,
        description: "This is my personal portfolio website, built using React.js. It showcases my details and provides information about the projects I am currently working on."
    },
    {
        key: 2,
        title:"Dice Game",
        img: dice,
        description: "This is a simple dice game developed using HTML, CSS, and JavaScript. Players roll the dice, and the one with the highest score wins."
    },
    {
        key: 3,
        title:"Play Drum",
        img: drum,
        description: "This is a simple Drum Playing Project built using HTML, CSS, and JavaScript. Users can press the designated buttons to play the drum sounds."
    },
    {
        key: 4,
        title:"Bank Management",
        img: bank,
        description: "This is a Bank Management Project developed using Python with SQL as the backend. The system allows users to log in, perform transactions such as withdrawing and depositing money, and generate account statements in PDF format."
    }
];
function Project() {
    const [project,setProject] = useState(ai_project)

    const handleClick = (type)=>{
        if(type === "ai"){
            setProject(ai_project)
        }
        else if(type === "web"){
            setProject(web_dev_project)
        }
    }
    return (
        <>
            <Header first={"My"} second={"Projects"} />
            <div className="btn-container" id="projectsection">
                <Button title={"AI PROJECT"} click={()=>handleClick("ai")} />
                <Button title={"WEB DEV"} click={()=>handleClick("web")} />
            </div>
            <Grid projects={project}/>
        </>
    );
}

export default Project;
