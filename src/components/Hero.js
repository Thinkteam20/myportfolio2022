import React from "react";
import "./Hero.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typewriter from "typewriter-effect";

const Hero = () => {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };
    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div className='section'>
            <h1>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(100)
                            .typeString("Hi,")
                            .pauseFor(300)
                            .deleteChars(10)
                            .typeString("I am<strong> Sangpil Jung</strong> ")
                            .deleteChars(13)
                            .typeString(
                                '<strong><span style="color: #27ae60;">Front-end Developer</span> in Australia.</strong>'
                            )
                            .pauseFor(100)
                            .start();
                    }}
                />
            </h1>
            <Particles
                id='tsparticles'
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 40,
                    interactivity: {
                        events: {
                            resize: true,
                        },
                    },
                    particles: {
                        color: {
                            value: "#f1f1f1",
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1080,
                            },
                            limit: 0,
                            value: 500,
                        },
                        opacity: {
                            animation: {
                                enable: true,
                                minimumValue: 0.5,
                                speed: 4,
                                sync: false,
                            },
                            random: {
                                enable: true,
                                minimumValue: 0.1,
                            },
                            value: 1,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: {
                                enable: true,
                                minimumValue: 0.5,
                            },
                            value: 1,
                        },
                    },
                }}
            />
        </div>
    );
};

export default Hero;
