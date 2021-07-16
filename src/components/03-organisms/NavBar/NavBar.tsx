import { useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { colorsRoles } from "../../01-atoms/colors";
import JsLogo from "../../01-atoms/icons/JsLogo";
import MenuButton from "../../02-molecules/MenuButton/MenuButton";
import { media } from "../../01-atoms/mediaqueries/MediaQueries";
import Socials from "./Socials";
import { animations } from "../../01-atoms/animations/transitions";
import { GlobalContext } from "../../data/contexts/global/GlobalProvider";


export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem calc((100vw - 75.625vw) / 2);
  background-color: ${colorsRoles.DarkGrey2};
  z-index: 10;

  > ul {
    display: none;
  }

  ${media.sm`
  > ul {
      display: flex;
    }
  `}

  ${media.md`
    position: fixed;
    right: 0;
    flex-direction : column;
    padding: 4rem 1rem;
    height: 100vh;
    width: fit-content;
    > ul {
      flex-direction: column;
    }
`}
`;

export const LogoLink = styled.a`
  ${media.md`
        &:hover {
            svg {
                animation: ${animations.leftRotate} 0.6s ease-out forwards;
                rect {
                    animation: ${animations.bounceIn} 0.6s ease-out forwards;
                }
            }
        }
    `}
`;

// type Props = {
//     ref: any
// }

const NavBar = () => {
  const HeaderRef = useRef<HTMLTextAreaElement>(null);
  const { setNavBarSize }  = useContext(GlobalContext);

  useEffect(() => {
    
    if (HeaderRef.current && window.matchMedia("(min-width: 1025px)").matches) {
      const navBarHeight = HeaderRef.current.clientWidth;
      setNavBarSize(navBarHeight)
    }
    
  });

  return (
    <>
      <Header ref={HeaderRef}>
        <LogoLink href="/">
          <JsLogo
            Size={2.5}
            CircleColor={colorsRoles.White_40}
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
