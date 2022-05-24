import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Background.css";

export default function Background() {
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <Particles
            id='tsparticles'
            init={particlesInit}
            loaded={particlesLoaded}
            style={{
                height: "30%",
            }}
            options={{
                interactivity: {
                    detectOn: "canvas",
                    events: {
                        onHover: {
                            enable: true,
                            mode: "connect",
                        },
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            lineLinked: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3,
                        },
                        connect: {},
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        push: {
                            particles_nb: 4,
                        },
                        remove: {
                            particles_nb: 2,
                        },
                    },
                },
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            area: 400,
                        },
                    },
                    color: {
                        value: [
                            "#BD10E0",
                            "#B8E986",
                            "#50E3C2",
                            "#FFD300",
                            "#E86363",
                        ],
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#b6b2b2",
                        },
                    },
                    opacity: {
                        value: 0.5,
                        random: false,
                        animation: {
                            enable: true,
                            speed: 1,
                            minimumValue: 0.1,
                            sync: false,
                        },
                    },
                    size: {
                        value: 8,
                        random: true,
                        animation: {
                            enable: true,
                            speed: 12,
                            minimumValue: 0.1,
                            sync: false,
                        },
                    },
                    lineLinked: {
                        enable: false,
                        distance: 150,
                        color: "#c8c8c8",
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        random: false,
                        straight: false,
                        outMode: "bounce",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    );
}
