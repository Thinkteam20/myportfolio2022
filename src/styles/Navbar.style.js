import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
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

export const Nav = styled.div`
    display: flex;
    width: 100%;
    height: 48px;
    justify-contents: center;
`;
export const Boxs = styled.div`
    width: 100%;
    text-align: center;
    line-height: 48px;
`;

export const Li = styled.li`
    color: white;
    list-style-type: none;
`;

export const StyledLink = styled(NavLink)`
    @import url("https://fonts.googleapis.com/css2?family=Urbanist:wght@100&display=swap");
    color: white;
    list-style-type: none;
    text-decoration: none;
    font-size: 14px;
    font-family: "Urbanist", sans-serif;
`;
export const Links = styled(Link)`
    @import url("https://fonts.googleapis.com/css2?family=Urbanist:wght@100&display=swap");
    //some CSS styles here
    color: white;
    list-style-type: none;
    text-decoration: none;
    font-size: 14px;
    font-family: "Urbanist", sans-serif;
`;
