import { useContext } from "react";
import styled from "styled-components";
import { media } from "../../01-atoms/mediaqueries/MediaQueries";
import HomeSkillNavItem from "../../03-organisms/HomeSkillNavItem/HomeSkillNavItem";
import GlobalProvider, { GlobalContext } from "../../data/contexts/global/GlobalProvider";
import {skills} from "../../data/skills/skills-data";

export const Wrapper = styled.ul`
width: 100%;
height: 100vh;
margin-top: ${({navBarSize}) => navBarSize}px;

 ${media.md} {
    display: flex;
    margin-top: 0px;
    width: calc(100% - ${({navBarSize}) => navBarSize}px);
    }

`;

const HomePage = () => {

    const { navBarSize }  = useContext(GlobalContext);

    return(
        <GlobalProvider>
            <Wrapper navBarSize={navBarSize}>
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
                    pathName={skill.SkillRouterPath}
                    />
                )
            }
        </Wrapper>
    </GlobalProvider>
    )

};

export default HomePage;