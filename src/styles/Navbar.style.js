import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const NavbarContainer = styled.div`
    width: 100%;
    height: 48px;
    position: relative;
    background: #fff;
    color: black;
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
    border-bottom: solid 0.1em #21abcd;
`;

export const Li = styled.li`
    color: #21abcd;
    list-style-type: none;
`;

export const Links = styled.li`
    @import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap");
    //some CSS styles here
    color: #21abcd;
    list-style-type: none;
    text-decoration: none;
    font-size: 14px;
    font-family: "Roboto Slab", serif;
`;
