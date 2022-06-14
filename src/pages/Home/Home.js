import React from "react";
import Typewriter from "typewriter-effect";
import Background from "../../components/Background.js";
import "./Home.css";
import { IoMdArrowRoundDown } from "react-icons/io";
import ResumeFile from "../../resume/resume.pdf";
import { Link } from "react-scroll";

function Home() {
    return (
        <div id='home' className='hero'>
            <div className='container'>
                <div className='type-cover'>
                    <h1>Sangpil Jung</h1>
                    <h2>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(100)
                                    .typeString("Hi,")
                                    .pauseFor(300)
                                    .deleteChars(10)
                                    .typeString(
                                        "I am<strong> Full-Stack engineer.</strong> "
                                    )
                                    .deleteChars(21)
                                    .typeString(
                                        '<strong><span style="color: #27ae60;">Front-end Developer</span> in Australia.</strong>'
                                    )
                                    .pauseFor(100)
                                    .start();
                            }}
                        />
                    </h2>
                </div>
                <div className='button-box'>
                    <button className='button1' onClick={ResumeFile}>
                        <a
                            href={ResumeFile}
                            download='resume'
                            style={{ color: "white" }}
                        >
                            <span>Download Resume</span>
                        </a>
                    </button>
                    <button className='button2'>
                        <a
                            href='https://www.linkedin.com/in/philip-jung-b546181a3'
                            style={{ color: "white" }}
                        >
                            <span>Go to LinkedIn!</span>
                        </a>
                    </button>
                </div>
                <div className='arrow'>
                    <Link to={"about"} smooth={true} duration={1000}>
                        <IoMdArrowRoundDown size={30} />
                    </Link>
                </div>
            </div>
            <Background />
        </div>
    );
}

export default Home;
