import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <Link to='Skill'>Skills</Link>
                    </li>
                    <li>
                        <Link to='Timeline'>Skills</Link>
                    </li>
                    <li>
                        <Link to='Projects'>Projects</Link>
                    </li>
                    <li>
                        <Link to='Footer'>Footer</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
