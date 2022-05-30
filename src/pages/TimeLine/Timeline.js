import React, { useState } from "react";
import {
    Container,
    Heading,
    HeadingBox,
    TimeBox,
    ExpHeading,
    TimelineBoxs,
    TimelineContents,
    TimelineBoxsUl,
    TimelineBoxsTitle,
    TimelineBoxsDuration,
    TimelineBoxsJobTitle,
    TimelineContentsDescription,
} from "./Timeline.style.js";
import { MdOutlineSchool } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";

function Timeline() {
    const [expTitle, setExpTitle] = useState("< Personal Experience/ >");
    return (
        <div id='timeline'>
            <Container>
                <HeadingBox>
                    <Heading>Timeline.</Heading>
                </HeadingBox>
                <TimeBox>
                    <ExpHeading>{expTitle}</ExpHeading>
                    {/* school */}
                    <TimelineContents>
                        <TimelineBoxs>
                            <TimelineBoxsUl>
                                <TimelineBoxsTitle>
                                    Queensland University of Technology
                                    <MdOutlineSchool />
                                </TimelineBoxsTitle>
                                <TimelineBoxsDuration>
                                    2018-2021
                                </TimelineBoxsDuration>
                                <TimelineBoxsJobTitle>
                                    Bachelor of Information Technology
                                </TimelineBoxsJobTitle>
                                <TimelineContentsDescription>
                                    Major: Computer Science
                                    <br />
                                </TimelineContentsDescription>
                            </TimelineBoxsUl>
                        </TimelineBoxs>
                        {/* Leap in!  */}
                        <TimelineBoxs>
                            <TimelineBoxsUl>
                                <TimelineBoxsTitle>
                                    Leap in!
                                    <MdWorkOutline />
                                </TimelineBoxsTitle>
                                <TimelineBoxsDuration>
                                    2020 june -2021 june
                                </TimelineBoxsDuration>
                                <TimelineBoxsJobTitle>
                                    Full-Stack Developer
                                </TimelineBoxsJobTitle>
                                <TimelineContentsDescription></TimelineContentsDescription>
                            </TimelineBoxsUl>
                        </TimelineBoxs>
                        {/* Uhak Station */}
                        <TimelineBoxs>
                            <TimelineBoxsUl>
                                <TimelineBoxsTitle>
                                    Uhak Station
                                    <MdWorkOutline />
                                </TimelineBoxsTitle>
                                <TimelineBoxsDuration>
                                    2021 July - Now
                                </TimelineBoxsDuration>
                                <TimelineBoxsJobTitle>
                                    software engineer
                                </TimelineBoxsJobTitle>
                                <TimelineContentsDescription></TimelineContentsDescription>
                            </TimelineBoxsUl>
                        </TimelineBoxs>
                    </TimelineContents>
                </TimeBox>
            </Container>
        </div>
    );
}

export default Timeline;
