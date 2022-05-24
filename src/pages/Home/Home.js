import React from "react";
// import {
//     MainContainer,
//     ParticleContainer,
//     MainPageContents,
//     TypeCover,
//     GoNext,
//     Hero,
// } from "./Home.styles.js";
// import { Skill, Timeline, Footer, Projects } from "../index.js";
import Typewriter from "typewriter-effect";
import Background from "../../components/Background.js";
import "./Home.css";
import Navbar from "../../Navbar.js";
import { IoMdArrowRoundDown } from "react-icons/io";

function Home() {
    return (
        <div id='hero'>
            <div className='container'>
                <Navbar />
            </div>
            <Background />
        </div>
    );
}

export default Home;
