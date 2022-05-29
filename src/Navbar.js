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
        { id: "h", value: "home", letter: " < home /> " },
        { id: "s", value: "skills", letter: " < skills /> " },
        { id: "t", value: "timeline", letter: " < timeline /> " },
        { id: "p", value: "projects", letter: " < projects /> " },
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
