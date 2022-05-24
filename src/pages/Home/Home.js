import React from "react";
import Typewriter from "typewriter-effect";
import Background from "../../components/Background.js";
import "./Home.css";
import Navbar from "../../Navbar.js";
import TypeCover from "typewriter-effect";
import { IoMdArrowRoundDown } from "react-icons/io";

function Home() {
    return (
        <div id='hero home'>
            <div className='container'>
                <div className='type-cover'>
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
                </div>
            </div>
            <Background />
        </div>
    );
}

export default Home;
