import React, { useState } from "react";
import { Container, SkillSet } from "./Skill.style";

const Skill = () => {
    return (
        <div id='skills'>
            <Container>
                <div>
                    <h1>Skills section</h1>
                    <p>skills and attributes</p>
                </div>
                <SkillSet>
                    <div>front-end</div>
                    <div>back-end</div>
                    <div>frameworks / libraries</div>
                </SkillSet>
            </Container>
        </div>
    );
};

export default Skill;
