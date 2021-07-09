import { useContext } from "react";
import styled from "styled-components";
import { media } from "../../01-atoms/mediaqueries/MediaQueries";
import HomeSkillNavItem from "../../03-organisms/HomeSkillNavItem/HomeSkillNavItem";
import { GlobalContext } from "../../data/contexts/global/GlobalContext";
import {skills} from "../../data/skills/skills-data";

export const Wrapper = styled.ul`
width: 100%;
height: 100vh;

${media.md`
    display: flex;
    width: calc(100% - 80px);
`}

`;

const HomePage = () => {

    return <>

        <Wrapper>
            {
                skills.map((skill,index) => 
                    <HomeSkillNavItem 
                    key={index}
                    Titre={skill.SkillTitle}
                    ImgSrc={skill.SkillHeroImg}
                    SubTitle={skill.SkillQuote}
                    Color={skill.SkillColor}
                    LightText={skill.SkillLightCtaLabel}
                    gradient={skill.SkillGradient}
                    label={skill.SkillCtaLabel}
                    />
                )
            }
        </Wrapper>

    </>

};

export default HomePage;