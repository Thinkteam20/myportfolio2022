import styled, { keyframes } from "styled-components";

export const Container = styled.section`
    padding-top: 90px;
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
    font-size: 25px;
    border-bottom: 2px solid #27ae60;
    width: 100%;
    display: block;
    font-family: "Raleway", sans-serif;
    margin-bottom: 10px;
`;

export const TimeBox = styled.div`
    margin: auto;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 20px;
    width: 70%;
    height: 80%;
    border: 3px solid rgb(2, 136, 209);
    box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
        rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
    border-radius: 10px;
`;

export const ExpHeading = styled.h2`
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

export const TimelineBoxs = styled.div`
    margin-top: 30px;
    width: 80%;
    position: relative;
    display: flex;
`;
export const TimelineBoxsUl = styled.ul`
    & {
    }

    &::before {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background: white;
        border-radius: 999px;
        left: -9px;
        border: 3px solid #0288d1;
    }
`;
export const TimelineBoxsTitle = styled.h3`
    margin-left: 30px;
`;
export const TimelineBoxsDuration = styled.h5`
    margin-top: 12px;
    margin-left: 30px;
    background: #f7f8f9;
`;

export const TimelineBoxsJobTitle = styled.h3`
    margin: 10px 5px 5px 12px;
    padding: 5px;
    background: #333;
    color: #fff;
    border-radius: 8px;
    width: 160px;
    text-align: center;
    font-size: 14px;
`;

export const TimelineContents = styled.div`
    border-left: 2px solid #333;
`;

export const TimelineContentsDescription = styled.p`
    margin-top: 8px;
    margin-left: 30px;
`;
