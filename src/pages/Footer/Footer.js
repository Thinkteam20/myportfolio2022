import React, { useState } from "react";
import {
    Container,
    HeadingBox,
    Heading,
    FooterH1,
    FooterContext,
    FooterContextSocials,
    SocialsA,
    Copywrite,
} from "./Footer.style";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
    const [text1, setText1] = useState("< Footer / >");
    return (
        <div id='footer'>
            <Container>
                <HeadingBox>
                    <FooterH1>{text1}</FooterH1>
                    <FooterContext>
                        <div>
                            <h1>Sangpil Jung</h1>
                        </div>
                        <FooterContextSocials>
                            <SocialsA href=''>
                                <FaLinkedin />
                            </SocialsA>
                            <SocialsA href=''>
                                <FaGithub />
                            </SocialsA>
                            <SocialsA href=''>
                                <FaInstagram />
                            </SocialsA>
                        </FooterContextSocials>
                        <Copywrite>
                            @Copyright Philip Jung. All Rights Reserved Designed
                            by Philip Jung.
                        </Copywrite>
                    </FooterContext>
                </HeadingBox>
            </Container>
        </div>
    );
};

export default Footer;
