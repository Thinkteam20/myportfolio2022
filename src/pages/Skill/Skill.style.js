import styled, { keyframes } from "styled-components";

// keyframes
const HtmlKeyframs = keyframes`
    100%{
        width: 90%;
    }

`;

const JsKeyframs = keyframes`
    100%{
        width: 90%;
    }`;
const Java = keyframes`
    100%{
        width: 70%;
    }`;
const React = keyframes`
    100%{
        width: 80%;
    }
`;

export const Container = styled.section`
    padding-top: 120px;
    padding-right: 60px;
    padding-left: 60px;
    margin: auto;
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 1;
    display: flex;
    background: #fff;
    @media (max-width: 768px) {
        height: 100vh;
        flex-direction: column;
        padding-bottom: 20px;
    }
`;

export const SkillLeftContainer = styled.div`
    padding: 10px;
    margin: auto;
`;

export const SkillSet = styled.div`
    width: 300px;
    height: 300px;
    border: 2px solid grey;
    border-radius: 15px;
    margin: auto;
`;
export const HeadingBox = styled.div`
    margin-right: 20px;
    @media (max-width: 480px) {
        margin-right: 0px;
    }
`;

export const Heading = styled.h1`
    & {
        font-size: 25px;
        border-bottom: 2px solid #27ae60;
        width: 100%;
        display: block;
        font-family: "Raleway", sans-serif;
        margin-bottom: 10px;
    }
    @media (max-width: 480px) {
        margin: auto;
        text-align: center;
        width: 30%;
    }
`;

export const Description = styled.p`
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    margin-top: 60px;
    margin-bottom: 10px;
    @media (max-width: 768px) {
        display: none;
        margin: auto;
    }
`;

export const SkillImg = styled.img`
    margin-top: 20px;
    width: 450px;
    height: 380px;
    border: 1px solid white;
    border-radius: 5px;
    @media (max-width: 768px) {
        display: none;
        margin: auto;
    }
`;

export const SkillRight = styled.div`
    width: 100%;
    margin-top: 60px;
    margin-left: 40px;
    @media (max-width: 768px) {
        width: auto;
        margin: auto;
    }
`;

export const SkillWarpper = styled.div`
    width: 100%;
    padding: 30px 30px 50px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
    font-family: "Poppins", sans-serif;
    color: black;
    font-weight: 500;
`;

export const Skills = styled.div`
    &:nth-last-child(n) {
        margin-bottom: 30px;
        color: black;
    }
`;

export const SkillBoxTitle = styled.h2`
    border: 2px solid #0288d1;
    display: inline-block;
    background-color: #e1f5fe;
    border-radius: 3px;
    margin-bottom: 50px;
    letter-spacing: 2px;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 3px;
`;
export const Details = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 15px;
    font-family: "Open Sans", sans-serif;
`;
export const Bar = styled.div`
    position: relative;

    border: 2px solid #0d96e0;

    border-radius: 20px;
`;
export const BarDiv = styled.div`
    position: relative;
    width: 0;
    height: 5px;
    border-radius: 10px;
    background-color: #0d96e0;
    animation: ${(props) =>
            props.name === "html"
                ? HtmlKeyframs
                : props.name === "java"
                ? Java
                : props.name === "react"
                ? React
                : props.name === "js"
                ? JsKeyframs
                : null}
        2s forwards;
`;

export const BtnSkillsOpt = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SmallBtn = styled.button``;
