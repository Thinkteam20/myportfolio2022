import React, { useState, useEffect } from "react";
import { useSpring, animated, useTransition } from "react-spring";
import {
    Container,
    SkillSet,
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
    BtnSkillsOpt,
    SmallBtn,
} from "./Skill.style";
import SkillsImg from "../../images/skills.png";

const Skill = () => {
    const [showSection, setShowSection] = useState(false);
    const [frontEnd, setFrontEnd] = useState("<Main Skills./>");
    const transition = useTransition(showSection, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    useEffect(() => {
        setShowSection(true);
    }, []);
    return (
        <>
            {transition((styles, item) =>
                item ? (
                    <animated.div id='skills' style={styles}>
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
                                    <br /> Capable of working within a team
                                    environment and
                                    <br />
                                    independently. Ability to plan and time
                                    schedule, work <br />
                                    under strict time pressure and adapt quickly
                                    when needed.
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
                                            <span>72%</span>
                                        </Details>
                                        <Bar>
                                            <BarDiv name='js'></BarDiv>
                                        </Bar>
                                    </Skills>
                                    <Skills>
                                        <Details>
                                            <span>React</span>
                                            <span>90%</span>
                                        </Details>
                                        <Bar>
                                            <BarDiv name='html'></BarDiv>
                                        </Bar>
                                    </Skills>
                                    <Skills>
                                        <Details>
                                            <span>Java</span>
                                            <span>90%</span>
                                        </Details>
                                        <Bar>
                                            <BarDiv name='html'></BarDiv>
                                        </Bar>
                                    </Skills>
                                    <Skills>
                                        <Details>
                                            <span>Node.js</span>
                                            <span>90%</span>
                                        </Details>
                                        <Bar>
                                            <BarDiv name='html'></BarDiv>
                                        </Bar>
                                    </Skills>
                                </SkillWarpper>
                            </SkillRight>
                        </Container>
                    </animated.div>
                ) : (
                    ""
                )
            )}
        </>
    );
};

export default Skill;
