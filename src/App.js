import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar.js";
import { Home, Skill, Timeline, Footer, Projects } from "./pages/index.js";

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} exact />
                    <Route path='/Skill' element={<Skill />} />
                    <Route path='/Timeline' element={<Timeline />} />
                    <Route path='/Projects' element={<Footer />} />
                    <Route path='/Footer' element={<Projects />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
