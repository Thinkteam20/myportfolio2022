import React from "react";
import { Skill, Timeline, Footer, Projects } from "../index.js";
import Hero from "../../components/Hero.js";

function Home() {
    return (
        <div>
            <Hero />
            <Skill />
            <Timeline />
            <Projects />
            <Footer />
        </div>
    );
}

export default Home;
