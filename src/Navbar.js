import React from "react";
// import { Link, NavLink } from "react-router-dom";
import {
    NavbarContainer,
    Nav,
    Boxs,
    StyledLink,
    Links,
} from "./styles/Navbar.style.js";

const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <Nav>
                    <Boxs>
                        <StyledLink to='/'>Home</StyledLink>
                    </Boxs>
                    <Boxs>
                        <Links to='Skill'>Skills</Links>
                    </Boxs>
                    <Boxs>
                        <Links to='Timeline'>Timeline</Links>
                    </Boxs>
                    <Boxs>
                        <Links to='Projects'>Projects</Links>
                    </Boxs>
                    <Boxs>
                        <Links to='Footer'>Footer</Links>
                    </Boxs>
                </Nav>
            </NavbarContainer>
        </>
    );
};

export default Navbar;
