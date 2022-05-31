import React, { useState } from "react";
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
                            <AboutSetRightTitle>Name</AboutSetRightTitle>
                            <AboutSetRightTitle2>
                                Sangpil Jung
                            </AboutSetRightTitle2>
                        </TitlesBox>
                        <TitlesBox>
                            <AboutSetRightTitle>Experience</AboutSetRightTitle>
                            <AboutSetRightTitle2>2 years</AboutSetRightTitle2>
                        </TitlesBox>
                        <TitlesBox>
                            <AboutSetRightTitle>Email</AboutSetRightTitle>
                            <AboutSetRightTitle2>
                                Teamgrey10@likelion.org
                            </AboutSetRightTitle2>
                        </TitlesBox>
                        <TitlesBox>
                            <AboutSetRightTitle>Mobile</AboutSetRightTitle>
                            <AboutSetRightTitle2>
                                0455672643
                            </AboutSetRightTitle2>
                        </TitlesBox>
                        <TitlesBox>
                            <AboutSetRightTitle>Location</AboutSetRightTitle>
                            <AboutSetRightTitle2>Sydney</AboutSetRightTitle2>
                        </TitlesBox>
                        <TitlesBox>
                            <AboutSetRightTitle>Instagram</AboutSetRightTitle>
                            <AboutSetRightTitle2>Link</AboutSetRightTitle2>
                        </TitlesBox>
                    </AboutSetRight>
                </AboutSet>
            </Container>
        </div>
    );
};

export default About;
