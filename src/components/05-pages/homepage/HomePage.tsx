import { useContext } from "react";
import styled from "styled-components";
import { media } from "../../01-atoms/mediaqueries/MediaQueries";
import HomeSkillNavItem from "../../03-organisms/HomeSkillNavItem/HomeSkillNavItem";
import { GlobalContext, GlobalContextValues } from "../../data/contexts/global/GlobalProvider";
import {skills} from "../../data/skills/skills-data";

type IWrapper = {
    navBarSize : number;
}

export const Wrapper = styled.ul<IWrapper>`
width: 100%;
height: 100vh;

@media (min-width: 1024px) {
    width: calc(100% - ${({navBarSize}) => navBarSize}px);
}

${media.md`
    display: flex;
`}

`;

const HomePage = () => {

    // const appContext  = useContext(GlobalContext);

    return <>

        <Wrapper navBarSize={80}>
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

    </>

};

export default HomePage;