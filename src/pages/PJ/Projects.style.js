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
    background-color: #fff;
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
`;

export const Wrapper = styled.div`
    margin: 50px 0px;
    height: 100%;
`;
export const Slider = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
`;

export const CardContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const Pcard = styled.div`
    height: 500px;
    width: 300px;

    border-radius: 10px;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
`;
export const CardImg = styled.img`
    width: 100%;
    max-height: 30%;
`;
export const Caption = styled.div`
    position: relative;
    height: 70%;
    padding: 10px;
    text-align: center;
`;
export const CaptionHeading = styled.h3`
    margin: 5px;
    font-weight: 800px;
    font-family: "Poppins", sans-serif;
`;
export const CaptionDesc = styled.p`
    font-size: 12px;
    font-weight: 400px;
    font-family: "Open Sans", sans-serif;
`;

export const CaptionChecklists = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 5px 0px 0px;
`;
export const Picons = styled.div`
    width: 100%;
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
    height: 100%;
    width: 100%;
    padding: 50px;
`;

export const InfoTitle = styled.h1`
    font-size: 30px;
    font-family: "Poppins", sans-serif;
`;
export const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500px;
    letter-spacing: 3px;
`;
export const InfoButton = styled.button``;
