import React, { useState } from "react";
import {
    Container,
    HeadingBox,
    Heading,
    Arrow,
    Wrapper,
    Slider,
    CardContainer,
    Pcard,
    Caption,
    CaptionHeading,
    CaptionDesc,
    CaptionChecklists,
    Picons,
    Picon,
    CardImg,
    InfoDiv,
    InfoContainer,
    InfoTitle,
    Desc,
    InfoButton,
} from "./Projects.style";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
import { sliderItem } from "../../data.js";

const Projects = () => {
    const [images, setImages] = useState([{ BsCheckLg }]);
    return (
        <div id='projects'>
            <Container>
                <HeadingBox>
                    <Heading>Projects.</Heading>
                </HeadingBox>
                <Arrow direction='left'>
                    <MdOutlineKeyboardArrowLeft />
                </Arrow>
                <Wrapper>
                    {sliderItem.map((item) => (
                        <Slider bg={item.bg}>
                            <CardContainer>
                                <Pcard>
                                    <CardImg src={item.left_img} />
                                    <Caption>
                                        <CaptionHeading>
                                            {item.left_title}
                                        </CaptionHeading>
                                        <CaptionDesc>
                                            {item.left_desc}
                                        </CaptionDesc>
                                    </Caption>
                                </Pcard>
                            </CardContainer>
                            <InfoContainer>
                                <InfoDiv>
                                    <InfoTitle>{item.right_title}</InfoTitle>
                                    <Desc>{item.right_desc}</Desc>
                                </InfoDiv>
                            </InfoContainer>
                        </Slider>
                    ))}
                </Wrapper>
                <Arrow direction='right'>
                    <MdOutlineKeyboardArrowRight />
                </Arrow>
            </Container>
        </div>
    );
};

export default Projects;
