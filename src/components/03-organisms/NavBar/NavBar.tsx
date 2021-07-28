import { useEffect, useRef, useContext, useState } from "react";
import { useRouteMatch, useLocation } from "react-router";
import styled from "styled-components";
import { colorsRoles } from "../../01-atoms/colors";
import JsLogo from "../../01-atoms/icons/JsLogo";
import MenuButton from "../../02-molecules/MenuButton/MenuButton";
import { media } from "../../01-atoms/mediaqueries/MediaQueries";
import Socials, { SocialsWrapper } from "./Socials";
import { animations } from "../../01-atoms/animations/transitions";
import { GlobalContext } from "../../data/contexts/global/GlobalProvider";
import { skills } from "../../data/skills/skills-data";


export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem calc((100vw - 75.625vw) / 2);
  background-color: ${colorsRoles.DarkGrey2};
  z-index: 10;

   ${SocialsWrapper} {
    display: none;
  }


   ${media.md} {
    position: fixed;
    right: 0;
    flex-direction : column;
    padding: 4rem 1rem;
    height: 100vh;
    width: fit-content;
    ${SocialsWrapper} {
    display: flex;
    flex-direction: column;
    }
  }

`;

export const LogoLink = styled.a`
 ${media.md} {
  &:hover {
            svg {
                animation: ${animations.leftRotate} 0.6s ease-out forwards;
                rect {
                    animation: ${animations.bounceIn} 0.6s ease-out forwards;
                }
            }
        }
}
`;

// type Props = {
//     ref: any
// }

const NavBar = () => {
  const HeaderRef = useRef<HTMLTextAreaElement>(null);
  const { navBarSize, setNavBarSize }  = useContext(GlobalContext);

  let Location = useLocation();

  let pathuiux = skills[0].SkillRouterPath;
  let pathdev = skills[1].SkillRouterPath;
  let pathphoto = skills[2].SkillRouterPath;

  let slugUiUx = useRouteMatch(pathuiux+"/:slug");
  let slugDev = useRouteMatch(pathdev+"/:slug");
  let slugPhoto = useRouteMatch(pathphoto+"/:slug");

  const [color, setColor] = useState("");

  const HandleColorChange = () => {
    setColor(
        pathuiux === Location.pathname || slugUiUx
            ? colorsRoles.uiCol
            : pathdev === Location.pathname || slugDev
            ? colorsRoles.frontCol
            : pathphoto === Location.pathname || slugPhoto
                ? colorsRoles.retouchCol
                : colorsRoles.White_40
    )
  }

  const HandleSizeNavBarsize = () => {
    if (HeaderRef.current && window.matchMedia("(min-width: 1025px)").matches) {
      const navBarHeight = HeaderRef.current.clientWidth;
      setNavBarSize(navBarHeight)
    }
  }

  useEffect(() => {
    HandleSizeNavBarsize();
    HandleColorChange();
  },[navBarSize]);


  return (
    <>
      <Header ref={HeaderRef}>
        <LogoLink href="/">
          <JsLogo
            Size={2.5}
            CircleColor={color}
            FillColor={colorsRoles.White_80}
          />
        </LogoLink>
        <MenuButton />
        <Socials />
      </Header>
    </>
  );
};

export default NavBar;
