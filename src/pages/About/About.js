import React, { useState, useRef, useLayoutEffect } from "react";

import {
    Container,
    HeadingBox,
    Heading,
    AboutSet,
    AboutSetLeft,
    AboutSetRight,
    AboutSetRightHeading,
    AboutSetRightDescription,
    AboutImage,
    BoxRight,
    BoxLeft,
    TitlesBox,
    AboutSetRightTitle,
    AboutSetRightTitle2,
} from "./About.style.js";
import LeftImg from "../../images/aboutimg.jpeg";

const About = () => {
    const [jobTitle, setJobTitle] = useState(
        "< Software Engineer and Freelancer/ >"
    );

    return (
        <div id='about'>
            <Container>
                <HeadingBox>
                    <Heading>About.</Heading>
                </HeadingBox>
                <AboutSet>
                    <AboutSetLeft>
                        <AboutImage src={LeftImg} alt='' />
                    </AboutSetLeft>
                    <AboutSetRight>
                        <AboutSetRightHeading>{jobTitle}</AboutSetRightHeading>
                        <AboutSetRightDescription>
                            I am a current software developer and freelancer who
                            wants to make new changes through coding.
                        </AboutSetRightDescription>
                        <AboutSetRightDescription>
                            I develop Web and Mobile apps for individuals and
                            businesses in various fields.
                        </AboutSetRightDescription>
                        <hr />
                        <TitlesBox>
                            <BoxLeft>
                                <AboutSetRightTitle>Name</AboutSetRightTitle>
                                <AboutSetRightTitle>
                                    Experience
                                </AboutSetRightTitle>
                                <AboutSetRightTitle>Email</AboutSetRightTitle>
                                <AboutSetRightTitle>Mobile</AboutSetRightTitle>
                            </BoxLeft>
                            <BoxRight>
                                <AboutSetRightTitle>
                                    Sangpil Jung
                                </AboutSetRightTitle>
                                <AboutSetRightTitle>2 years</AboutSetRightTitle>
                                <AboutSetRightTitle>
                                    teamgrey10@likelion.org
                                </AboutSetRightTitle>
                                <AboutSetRightTitle>
                                    0455672643
                                </AboutSetRightTitle>
                            </BoxRight>
                        </TitlesBox>
                    </AboutSetRight>
                </AboutSet>
            </Container>
        </div>
    );
};

export default About;
