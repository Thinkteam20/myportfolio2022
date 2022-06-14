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
    CardBody,
    CaptionDesc,
    StackIconBox,
    StackIcon,
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
    const [slideIndex, setSlideIndex] = useState(0);
    const [images, setImages] = useState([{ BsCheckLg }]);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
        }
    };
    return (
        <div id='projects'>
            <Container>
                <HeadingBox>
                    <Heading>Projects.</Heading>
                </HeadingBox>
                <Arrow direction='left' onClick={() => handleClick("left")}>
                    <MdOutlineKeyboardArrowLeft />
                </Arrow>
                <Wrapper slideIndex={slideIndex}>
                    {sliderItem.map((item) => (
                        <Slider bg={item.bg}>
                            <CardContainer>
                                <CardBody>
                                    <Pcard>
                                        <CardImg src={item.left_img} />
                                        <Caption>
                                            <CaptionHeading>
                                                {item.left_title}
                                            </CaptionHeading>
                                            <CaptionDesc>
                                                {item.left_desc}
                                            </CaptionDesc>
                                            <StackIconBox>
                                                {item.stack_icons?.map(
                                                    (icons, key) => {
                                                        return (
                                                            <StackIcon
                                                                src={
                                                                    icons.iconName
                                                                }
                                                            />
                                                        );
                                                    }
                                                )}
                                            </StackIconBox>
                                        </Caption>
                                    </Pcard>
                                </CardBody>
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
                <Arrow direction='right' onClick={() => handleClick("right")}>
                    <MdOutlineKeyboardArrowRight />
                </Arrow>
            </Container>
        </div>
    );
};

export default Projects;
