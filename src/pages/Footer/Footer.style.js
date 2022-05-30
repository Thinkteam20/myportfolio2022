import styled, { keyframes } from "styled-components";

export const Container = styled.section`
    padding-top: 20px;
    padding-right: 60px;
    padding-left: 60px;
    width: 100%;
    height: 250px;
    position: relative;
    text-align: center;
    z-index: 1;
    background: #f7f8f9;
    @media (max-width: 768px) {
        height: 100vh;
        flex-direction: column;
        padding-bottom: 20px;
    }
`;
export const HeadingBox = styled.div`
    margin-right: 20px;
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
`;

export const FooterH1 = styled.h1`
    border: 2px solid #0288d1;
    display: inline-block;
    background-color: #e1f5fe;
    border-radius: 3px;
    margin-bottom: 20px;
    -webkit-letter-spacing: 2px;
    -moz-letter-spacing: 2px;
    -ms-letter-spacing: 2px;
    letter-spacing: 2px;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 5px;
`;

export const FooterContext = styled.div`
    color: black;
`;

export const FooterContextSocials = styled.div`
    margin-top: 30px;
    color: black;
    justify-content: space-between;
`;

export const SocialsA = styled.a`
    color: black;
    padding: 10px;
    font-size: 30px;
`;

export const Copywrite = styled.p`
    margin-top: 20px;
`;
