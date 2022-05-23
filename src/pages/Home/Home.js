import React from "react";
import {
    MainContainer,
    ParticleContainer,
    MainPageContents,
    TypeCover,
    GoNext,
} from "./Home.styles.js";
// import { Skill, Timeline, Footer, Projects } from "../index.js";
import Typewriter from "typewriter-effect";
import Background from "../../components/Background.js";
import Navbar from "../../Navbar.js";
import { IoMdArrowRoundDown } from "react-icons/io";

function Home() {
    return (
        <MainContainer>
            <MainPageContents>
                <Background />
                <TypeCover>
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
                </TypeCover>
                <GoNext>
                    <span>Go to Next</span>
                    <div>
                        <span>
                            <IoMdArrowRoundDown />
                        </span>
                    </div>
                </GoNext>
            </MainPageContents>
        </MainContainer>
    );
}

export default Home;
