import {useEffect,useRef, useState} from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import { colorsRoles, shadows } from "../../01-atoms/colors";
import media from "../../01-atoms/mediaqueries/MediaQueries";
import icons from "../../01-atoms/icons/icons";
import { ReactSVG } from "react-svg";
import { gridSideMargins } from "../../01-atoms/layout/Grid";
import { transitions } from "../../01-atoms/animations/transitions";

export const BackButtonWrapper = styled.button`
position: fixed;
z-index: 5;
top: 90%;
left: ${gridSideMargins.xs};
width: 3rem;
height: 3rem;
background-color: ${colorsRoles.White};
border: none;
border-radius: 50%;
box-shadow: ${shadows.shadowButton};
opacity: ${props => props.backButtonVisible ? "1" : "0"};

${media.sm} {
    left: ${gridSideMargins.sm};
}

${media.md}{
top: 4rem;
left: ${gridSideMargins.md};
transition: ${transitions.easeOut3ms};
}
${media.lg} {
    left: ${gridSideMargins.lg};
}

& svg {
transform: rotateY(-180deg);
fill: ${colorsRoles.DarkGrey};
width: 24px;
height: 24px;
transition: ${transitions.easeOut3ms};
    & path {
        fill: ${colorsRoles.DarkGrey};
    }
}

${media.md} {
    &:hover {
        transform: scale(1.1);
        transition: ${transitions.easeOut3ms};
        & svg {
            transform: rotateY(-180deg) translateX(0.3rem) scale(0.9);
            transition: ${transitions.easeOut3ms}
        }
    }
}

`;

const BackButton = () => {

    let History = useHistory();
    const refButton = useRef();
    const [backButtonVisible, setBackButtonVisible] = useState(true);

    const handleScroll = () => {
        let MediaQuery = window.matchMedia("(min-width: 1025px)");
        let currentScroll = window.pageYOffset;

        if (MediaQuery.matches) {
            if(currentScroll >= 800) {
                window.requestAnimationFrame(() => {
                    setBackButtonVisible(false);
                });
            } else {
                window.requestAnimationFrame(() => {
                    setBackButtonVisible(true);
                });
            }
        }
    }

    const handleBackHistory = () => {
        History.goBack();
        window.scrollTo(0, 0);
    }

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll',handleScroll);
    //     }
    // })

    return <>
        <BackButtonWrapper
        onClick={handleBackHistory}
        ref={refButton}
        backButtonVisible={backButtonVisible}
        > 
    <ReactSVG src={icons.Arrow}/>
        </BackButtonWrapper>
    </>

};

export default BackButton;