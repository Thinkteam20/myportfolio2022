import React, { useState, useEffect } from "react";
import {
    Container,
    Heading,
    Description,
    SkillImg,
    HeadingBox,
    SkillRight,
    SkillWarpper,
    SkillBoxTitle,
    Skills,
    Details,
    Bar,
    BarDiv,
} from "./Skill.style";
import SkillsImg from "../../images/skills.png";

const Skill = () => {
    const [frontEnd, setFrontEnd] = useState("<Main Skills./>");

    useEffect(() => {}, []);
    return (
        <>
            <div id='skills'>
                <Container>
                    <HeadingBox>
                        <Heading>SKILLS.</Heading>
                    </HeadingBox>

                    <div>
                        <Description>
                            Experience with all phases of the{" "}
                            <b>software life-cycle.</b>
                            <br />
                            Passion for learning new technologies.
                            <br /> Capable of working within a team environment
                            and
                            <br />
                            independently. Ability to plan and time schedule,
                            work <br />
                            under strict time pressure and adapt quickly when
                            needed.
                        </Description>
                        <SkillImg src={SkillsImg}></SkillImg>
                    </div>
                    <SkillRight>
                        <SkillWarpper>
                            <SkillBoxTitle>{frontEnd}</SkillBoxTitle>
                            <Skills>
                                <Details>
                                    <span>HTML/CSS</span>
                                    <span>90%</span>
                                </Details>
                                <Bar>
                                    <BarDiv name='html'></BarDiv>
                                </Bar>
                            </Skills>
                            <Skills>
                                <Details>
                                    <span>Javascript</span>
                                    <span>90%</span>
                                </Details>
                                <Bar>
                                    <BarDiv name='js'></BarDiv>
                                </Bar>
                            </Skills>
                            <Skills>
                                <Details>
                                    <span>React</span>
                                    <span>85%</span>
                                </Details>
                                <Bar>
                                    <BarDiv name='react'></BarDiv>
                                </Bar>
                            </Skills>
                            <Skills>
                                <Details>
                                    <span>Java</span>
                                    <span>70%</span>
                                </Details>
                                <Bar>
                                    <BarDiv name='java'></BarDiv>
                                </Bar>
                            </Skills>
                            <Skills>
                                <Details>
                                    <span>Node.js</span>
                                    <span>85%</span>
                                </Details>
                                <Bar>
                                    <BarDiv name='react'></BarDiv>
                                </Bar>
                            </Skills>
                        </SkillWarpper>
                    </SkillRight>
                </Container>
            </div>
        </>
    );
};

export default Skill;
