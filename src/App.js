import React from "react";
import "./App.css";
import Navbar from "./Navbar.js";
import { Home, Skill, Timeline, Footer, Projects } from "./pages/index.js";

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
        </div>
    );
};

export default App;
