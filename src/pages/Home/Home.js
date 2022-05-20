import React from "react";
import {
    MainContainer,
    ParticleContainer,
    MainPageContents,
} from "./Home.styles.js";
// import { Skill, Timeline, Footer, Projects } from "../index.js";
import Typewriter from "typewriter-effect";
import Background from "../../components/Background.js";
import Navbar from "../../Navbar.js";

function Home() {
    return (
        <MainContainer>
            <MainPageContents>
                <Background />
                <h1>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(100)
                                .typeString("Hi,")
                                .pauseFor(300)
                                .deleteChars(10)
                                .typeString(
                                    "I am<strong> Sangpil Jung</strong> "
                                )
                                .deleteChars(13)
                                .typeString(
                                    '<strong><span style="color: #27ae60;">Front-end Developer</span> in Australia.</strong>'
                                )
                                .pauseFor(100)
                                .start();
                        }}
                    />
                </h1>
            </MainPageContents>
        </MainContainer>
    );
}

export default Home;
