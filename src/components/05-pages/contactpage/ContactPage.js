import { useContext } from "react";
import styled, { css, keyframes } from "styled-components";
import {  transitions } from "../../01-atoms/animations/transitions";
import { colorsRoles } from "../../01-atoms/colors";
import media from "../../01-atoms/mediaqueries/MediaQueries";
import { GlobalContext } from "../../data/contexts/global/GlobalProvider";
import HelloContacTitle from "./HelloContacTitle";


const contactPageLaptop = keyframes`
  0% {
    transform: scaleX(1)
  }
  80% {
    transform: scaleX(1.1)
  }
  100% {
    transform: scaleX(1)
  }
`

const contactPageLaptopAnimation = () =>
css`
    ${contactPageLaptop} 600ms ease-in-out ;
`;


export const Wrapper = styled.div`
    position: fixed;
    z-index: 2;
    right: 0;
    background-color: ${colorsRoles.White};
    width: 100vw;
    height: 100vh;
    transform: ${(props) => props.aboutPageHidden? 'translateY(-100vh)' : 'translateY(0)'};
    transition: ${transitions.easeOut3ms};
    

    ${media.md} {
        width: ${(props) => props.aboutPageHidden? '0' : '50%'};
        /* box-shadow:  20px 0px 50px 20px ${colorsRoles.DarkGrey}; */
        height: 100vh;
        transform: unset;
        right: 5.5rem;
        transform-origin: right center;
        animation: ${(props) => props.aboutPageHidden? contactPageLaptopAnimation : contactPageLaptopAnimation};
        
    }
`;

export const ContactContent = styled.div`

`;

const ContactPage = () => {

    const {aboutPageHidden} = useContext(GlobalContext)

    return <>
        <Wrapper aboutPageHidden={aboutPageHidden}>
                <ContactContent>
                <HelloContacTitle />
                </ContactContent>
        </Wrapper>
    </>

};


export default ContactPage;