import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const NavbarContainer = styled.div`
    width: 100%;
    height: 48px;
    background-color: black;
    flex-direction: column;
    display: flex;
    align-items: center;
    justfy-contents: center;
    align-content: space-between;
    @media (min-width: 700px) {
        height: 48px;
    }
`;

export const Nav = styled.nav`
    display: flex;
    width: 100%;
    height: 48px;
    justify-contents: center;
`;
export const Boxs = styled.div`
    width: 100%;
    text-align: center;
    line-height: 48px;
    border-bottom: solid 0.1em gold;
`;

export const Li = styled.li`
    color: white;
    list-style-type: none;
`;

export const Links = styled.li`
    @import url("https://fonts.googleapis.com/css2?family=Urbanist:wght@100&display=swap");
    //some CSS styles here
    color: white;
    list-style-type: none;
    text-decoration: none;
    font-size: 12px;
    font-family: "Urbanist", sans-serif;
`;
