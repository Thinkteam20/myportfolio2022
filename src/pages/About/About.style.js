import styled, { keyframes } from "styled-components";
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
    background: #fff;
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

export const AboutSet = styled.div`
    margin-top: 40px;
    display: flex;
    width: 100%;
    height: 600px;
`;
export const AboutSetLeft = styled.div`
    flex-basis: 35%;
    background: url(../../images/about-image.jpeg) no-repeat center center fixed;
`;
export const AboutSetRight = styled.div`
    flex-basis: 65%;
    text-align: left;
    padding: 20px;
    margin-left: 20px;
`;
export const AboutSetRightHeading = styled.h3`
    border: 2px solid #0288d1;
    display: inline-block;
    background-color: #e1f5fe;
    border-radius: 3px;
    letter-spacing: 2px;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 5px;
`;

export const AboutSetRightDescription = styled.p`
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #6c757d !important;
    font-family: "Open Sans", sans-serif;
`;
export const AboutImage = styled.img`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5%;
`;

export const TitlesBox = styled.div`
    width: 70%;
    margin: 20px;
    display: flex;
    justify-content: space-between;
`;

export const AboutSetRightTitle = styled.h2`
    font-family: "Open Sans", sans-serif;
    font-weight: 900;
    font-size: 20px;
    font-size: 17px;
`;
export const AboutSetRightTitle2 = styled.h2`
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
    font-size: 20px;
    font-size: 17px;
`;
