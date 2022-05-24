import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
import { Link } from "react-scroll";

import {
    NavbarContainer,
    Nav,
    Boxs,
    StyledLink,
    Links,
} from "./styles/Navbar.style.js";

const Navbar = () => {
    const [navItems, setNavItems] = useState([
        { id: "h", value: "/", letter: " < home /> " },
        { id: "s", value: "skills", letter: " < skills /> " },
        { id: "t", value: "timeline", letter: " < timeline /> " },
        { id: "p", value: "projects", letter: " < projects /> " },
        { id: "f", value: "footer", letter: " < footer /> " },
    ]);

    return (
        <>
            <NavbarContainer>
                <Nav>
                    {navItems.map((item) => {
                        return (
                            <Boxs key={item.id}>
                                <Links>
                                    <Link
                                        to={item.value}
                                        smooth={true}
                                        duration={1000}
                                    >
                                        {item.letter}
                                    </Link>
                                </Links>
                            </Boxs>
                        );
                    })}
                </Nav>
            </NavbarContainer>
        </>
    );
};

export default Navbar;
