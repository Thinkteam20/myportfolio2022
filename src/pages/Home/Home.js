import React from "react";
import { Skill, Timeline, Footer, Projects } from "../index.js";

function Home() {
    return (
        <div>
            <h1>This is Home!</h1>
            <Skill />
            <Timeline />
            <Projects />
            <Footer />
        </div>
    );
}

export default Home;
