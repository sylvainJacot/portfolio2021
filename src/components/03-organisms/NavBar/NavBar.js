import { useEffect, useRef, useContext, useState } from "react";
import { useRouteMatch, useLocation } from "react-router";
import styled from "styled-components";
import { colorsRoles, shadows } from "../../01-atoms/colors";
import JsLogo from "../../01-atoms/icons/JsLogo";
import MenuButton from "../../02-molecules/MenuButton/MenuButton";
import { media } from "../../01-atoms/mediaqueries/MediaQueries";
import Socials, { SocialsWrapper } from "./Socials";
import { animations } from "../../01-atoms/animations/transitions";
import { GlobalContext } from "../../data/contexts/global/GlobalProvider";
import { skills } from "../../data/skills/skills-data";
import { gridSideMargins } from "../../01-atoms/layout/Grid";


export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem ${gridSideMargins.xs} ;
  background-color: ${props => props.darkNavBar ? colorsRoles.DarkGrey2 : colorsRoles.White};
  z-index: 20;
  box-shadow: ${shadows.shadowPicture};

   ${SocialsWrapper} {
    display: none;
  }
  ${media.sm} {
    padding: 1rem ${gridSideMargins.sm} ;
  }

   ${media.md} {
    right: 0;
    flex-direction : column;
    padding: 4rem 1rem;
    height: 100vh;
    min-width: 88px;
    max-width: 88px;

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


const NavBar = () => {
  const HeaderRef = useRef();
  const { setNavBarSize }  = useContext(GlobalContext);

  let Location = useLocation();

  let pathuiux = skills[0].SkillRouterPath;
  let pathdev = skills[1].SkillRouterPath;
  let pathphoto = skills[2].SkillRouterPath;

  let slugUiUx = useRouteMatch(pathuiux+"/:slug");
  let slugDev = useRouteMatch(pathdev+"/:slug");
  let slugPhoto = useRouteMatch(pathphoto+"/:slug");

  const [color, setColor] = useState("");
  const [darkNavBar, setDarkNavBar] = useState(true);

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

  const HandleModeNav = () => {
    setDarkNavBar(
      pathphoto === Location.pathname || slugPhoto ? false : true
    )
  }

  const HandleSizeNavBarsize = () => {
    if (HeaderRef.current && window.matchMedia("(min-width: 1024px)").matches) {
      const navBarWidth = HeaderRef.current.clientWidth;
      console.log(navBarWidth);
      setNavBarSize(navBarWidth)
    } else {
      const navBarHeight = HeaderRef.current.clientHeight;
      // console.log(navBarHeight);
      setNavBarSize(navBarHeight)
    }
  }

  useEffect(() => {
    HandleSizeNavBarsize();
    HandleColorChange();
    HandleModeNav();
  });


  return (
    <>
      <Header ref={HeaderRef} darkNavBar={darkNavBar}>
        <LogoLink href="/">
          <JsLogo
            Size={2.5}
            CircleColor={color}
            FillColor={colorsRoles.White_80}
            darkNavBar={darkNavBar}
          />
        </LogoLink>
        <MenuButton darkNavBar={darkNavBar}/>
        <Socials darkNavBar={darkNavBar}/>
      </Header>
    </>
  );
};

export default NavBar;
