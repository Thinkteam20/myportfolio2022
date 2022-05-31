import React from "react";
import "./App.css";
import Navbar from "./Navbar.js";
import {
    Home,
    About,
    Skill,
    Timeline,
    Footer,
    Projects,
} from "./pages/index.js";

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Skill />
            <Timeline />
            <Projects />
            <Footer />
        </div>
    );
};

export default App;
