import {useContext} from "react";
import styled from "styled-components";
import { transitions } from "../../01-atoms/animations/transitions";
import { colorsRoles } from "../../01-atoms/colors";
import { fontsFamilies } from "../../01-atoms/GlobalStyle";
import { GlobalContext } from "../../data/contexts/global/GlobalProvider";

export const Wrapper = styled.button`
    position: relative;
    width: 3rem;
    height: 3rem;
    background-color: ${props => props.darkNavBar ? colorsRoles.DarkGrey : "unset"};
    border-radius: 0.5rem;
    font-size: 0.8rem;
    font-family: ${fontsFamilies.poppinsSemiBold};
    color: ${props => props.darkNavBar ? colorsRoles.White_80 : colorsRoles.DarkGrey};
    text-transform: uppercase;

    &:before,&:after {
        display: block;
        position: absolute;
        left: 50%;
        transition: ${transitions.easeOut2ms}
    }
    &:before {
        content:"Menu";
        top: ${props => props.aboutPageHidden ? "50%" : "25%"};
        opacity: ${props => props.aboutPageHidden ? "1" : "0"};
        transform: ${props => props.aboutPageHidden ? "translate(-50%, -50%) scaleY(1)" : "translate(-50%, -50%) scaleY(0.5)"};
    }
    &:after {
        content:"Close";
        top: ${props => props.aboutPageHidden ? "75%" : "50%"};
        opacity: ${props => props.aboutPageHidden ? "0" : "1"};
        transform: ${props => props.aboutPageHidden ?"translate(-50%, -50%) scaleY(0.5)" : "translate(-50%, -50%) scaleY(1)"};
    }
`;

const MenuButton = ({darkNavBar}) => {

    const {aboutPageHidden, setAboutPageHidden} = useContext(GlobalContext)

    const handleToggleAboutPage = () => {
        setAboutPageHidden(!aboutPageHidden);
    }


    return <>
        <Wrapper aria-label="menu" onClick={handleToggleAboutPage} aboutPageHidden={aboutPageHidden} darkNavBar={darkNavBar}>

        </Wrapper>
    </>

};

export default MenuButton;

