import styled, { keyframes } from "styled-components";

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
