import { useEffect, useRef, useContext, FC } from "react";
import styled from "styled-components";
// import { Link } from "@reach/router";
// import {Bounce} from "../../01-atoms/Animations/Animations";
import { colorsRoles } from "../../01-atoms/colors";
import JsLogo from "../../01-atoms/icons/JsLogo";
import MenuButton from "../../02-molecules/MenuButton/MenuButton";
import { media } from "../../01-atoms/mediaqueries/MediaQueries";
import { GlobalContext } from "../../data/contexts/global/GlobalContext";


export const Header = styled.header`
display: flex;
justify-content: space-between;
padding: 1rem calc((100vw - 75.625vw) / 2);
background-color: ${colorsRoles.DarkGrey2};
z-index: 10;

${media.md`
    position: fixed;
    right: 0;
    flex-direction : column;
    padding: 4rem 1rem;
    height: 100vh;
    width: fit-content;
`}

`;

export const LogoLink = styled.a`
    ${media.md`
        &:hover {

        }
    `}
`;

// type Props = {
//     ref: any
// }

const NavBar= () => {

    const HeaderRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if(HeaderRef.current) {
        // const NavBarHeight = HeaderRef.current.clientWidth;
        // console.log(NavBarHeight)
        }
    }, [])

    return <>
            <Header ref={HeaderRef}>

                <LogoLink href="/">
                    <JsLogo
                    Size={2.5}
                    CircleColor={colorsRoles.White_10}
                    FillColor={colorsRoles.White}
                    />
                </LogoLink>

                <MenuButton/>
            </Header>
    </>

};

export default NavBar;

