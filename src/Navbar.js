import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

import {
    NavbarContainer,
    Nav,
    Boxs,
    StyledLink,
    Links,
    NavbarExtendedContainer,
    NavbarLinkExtended,
    OpenLinksButton,
} from "./styles/Navbar.style.js";

const Navbar = () => {
    const [navItems, setNavItems] = useState([
        { id: "h", value: "home", letter: " < Home /> " },
        { id: "b", value: "about", letter: " < About /> " },
        { id: "s", value: "skills", letter: " < Skills /> " },
        { id: "t", value: "timeline", letter: " < Timeline /> " },
        { id: "p", value: "projects", letter: " < Projects /> " },
        { id: "f", value: "footer", letter: " < footer /> " },
    ]);
    const [extendNavbar, setExtendNavbar] = useState(false);

    return (
        <>
            <NavbarContainer extendNavbar={extendNavbar}>
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
                <OpenLinksButton
                    onClick={() => {
                        setExtendNavbar((curr) => !curr);
                    }}
                >
                    {extendNavbar ? <FiX /> : <FiMenu />}
                </OpenLinksButton>

                {/* extendNavbar */}
                {extendNavbar && (
                    <NavbarExtendedContainer>
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
                    </NavbarExtendedContainer>
                )}
            </NavbarContainer>
        </>
    );
};

export default Navbar;
