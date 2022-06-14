import styled, { keyframes } from "styled-components";
import { mobile } from "../../responsive.js";
/* 
font-family: 'Open Sans', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'Raleway', sans-serif;
font-family: 'Urbanist', sans-serif;
*/

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
    overflow: hidden;
    background-color: #fff;
    @media only screen and (max-width: 480px) {
        height: 100%;
        flex-direction: column;
        padding-bottom: 20px;
        padding-right: 10px;
        padding-left: 10px;
        overflow: auto;
    }
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
        width: 35%;
    }
`;
export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${(props) => props.direction === "left" && "40px"};
    right: ${(props) => props.direction === "right" && "40px"};
    cursor: pointer;
    @media (max-width: 480px) {
        display: none;
    }
`;

export const Wrapper = styled.div`
    margin: 50px 0px;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    @media (max-width: 480px) {
        height: 100vh;
        flex-direction: column;
        padding-bottom: 20px;
    }
`;
export const Slider = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.bg};
    @media (max-width: 480px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const CardContainer = styled.div`
    flex: 1;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 480px) {
        width: 100vw;
    }
`;

export const Pcard = styled.div`
    height: 500px;
    width: 400px;
    border-radius: 10px;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
    @media (max-width: 480px) {
        height: 100%;
        width: 100%;
    }
`;
export const CardImg = styled.img`
    width: 100%;
    max-height: 40%;
`;
export const Caption = styled.div`
    position: relative;
    max-height: 60%;
    padding: 40px;
    text-align: center;
`;
export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
`;
export const CaptionHeading = styled.h3`
    margin: 10px 0px;
    font-weight: 800px;
    font-size: 24px;
    font-family: "Poppins", sans-serif;
`;
export const CaptionDesc = styled.p`
    font-size: 12px;
    font-weight: 400px;
    font-family: "Open Sans", sans-serif;
    background: #cccccc;
    border-radius: 50px;
    font-size: 12px;
    margin: 0;
    padding: 2px 10px;

    text-transform: uppercase;
    cursor: pointer;
`;

export const StackIconBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    margin: 30px 0;
`;

export const StackIcon = styled.img`
    width: 60px;
    height: 60px;
    margin: 0 10px;
    @media (max-width: 480px) {
        width: 30px;
        height: 30px;
    }
`;

export const CaptionChecklists = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 5px 0px 0px;
`;

export const Picons = styled.div`
    margin: 20px 5px;
    display: flex;
`;
export const Picon = styled.div`
    width: 50px;
    height: 50px;
    margin: 0px 5px;
`;

export const InfoContainer = styled.div`
    flex: 1;
    padding: 20px;
`;
export const InfoDiv = styled.div`
    flex-direction: start;
    width: 50%;
    @media (max-width: 480px) {
        width: 100%;
        margin-bottom: 30px;
        text-align: center;
    }
`;
export const InfoTitle = styled.h1`
    width: 100%;
    font-size: 30px;
    font-family: "Poppins", sans-serif;
`;
export const Desc = styled.p`
    font-size: 20px;
    font-weight: 500px;
    letter-spacing: 3px;
    width: 100%;
    margin-top: 20px;
`;
