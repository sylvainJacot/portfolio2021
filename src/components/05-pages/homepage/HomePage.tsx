import styled from "styled-components";
// import Grid from "../../01-atoms/layout/Grid";
import HomeSkillNavItem from "../../03-organisms/HomeSkillNavItem/HomeSkillNavItem";
import {skills} from "../../data/skills/skills-data";

export const Wrapper = styled.ul`
width: 100%;
height: 100vh;

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
                    />
                )
            }
        </Wrapper>

    </>

};

export default HomePage;