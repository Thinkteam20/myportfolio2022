import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const NavbarContainer = styled.div`
    width: 100%;
    height: 48px;
    position: fixed;
    top: 0;
    z-index: 99;
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
    @media (max-width: 700px) {
        display: none;
    }
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
    font-family: "Poppins", sans-serif;
    cursor: pointer;
`;

export const Links = styled.li`
    //some CSS styles here
    color: #21abcd;
    list-style-type: none;
    text-decoration: none;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
`;

export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
    }
`;
export const OpenLinksButton = styled.button`
    width: 50px;
    height: 50px;
    background: none;
    border: none;
    color: black;
    font-size: 30px;
    cursor: pointer;
    text-align: center;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 99;

    @media (min-width: 700px) {
        display: none;
    }
`;
export const NavbarLinkExtended = styled(Link)`
    @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Mono:wght@300&display=swap");
    font-family: "Bebas Neue";
    margin: 10px;
    color: black;
    text-decoration: none;
    font-size: 14pt;
    border-bottom: 2px solid black;
`;
