import { useContext, useEffect } from "react";
import styled from "styled-components";
import { media } from "../../01-atoms/mediaqueries/MediaQueries";
import HomeSkillNavItem from "../../03-organisms/HomeSkillNavItem/HomeSkillNavItem";
import GlobalProvider, { GlobalContext } from "../../data/contexts/global/GlobalProvider";
import {skills} from "../../data/skills/skills-data";
import Footer from "../../03-organisms/Footer/footer";

export const Wrapper = styled.ul`
width: 100%;
height: 100%;
margin-top: ${({navBarSize}) => navBarSize}px;

 ${media.md} {
    display: flex;
    margin-top: 0px;
    width: calc(100% - ${({navBarSize}) => navBarSize}px);
    height: 100vh;
    }

`;

const HomePage = () => {

    const { navBarSize, setNavBarSize }  = useContext(GlobalContext);

    useEffect(() => {
        function handleNavBarSize() {
            setNavBarSize(navBarSize);
        }
        window.addEventListener("resize", handleNavBarSize);
    }, 300)

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
        <Footer />
    </GlobalProvider>
    )

};

export default HomePage;