
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import { transitions } from "../../01-atoms/animations/transitions";
import { colorsRoles } from "../../01-atoms/colors";
import { fontsFamilies } from "../../01-atoms/GlobalStyle";
import media from "../../01-atoms/mediaqueries/MediaQueries";


export const StyledReactSVG = styled(ReactSVG) `
    div {
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            min-width: 100%;
            object-fit: contain;    
        }
    }
`;
export const MethodoLabelContent = styled.p`
font-family: ${fontsFamilies.poppinsRegular};
font-size: 0.7rem;
color: ${props => props.isLightText ? colorsRoles.White : colorsRoles.DarkGrey};
    ${media.md} {
        transform: scaleX(0.8);
        opacity: 0;
        transition: ${transitions.easeOut2ms};
    }
`;
export const MethodoLabel = styled.div`
position: absolute;
background-color: ${props => props.mainCol};
width: max-content;
text-align: center;
border-radius: 1rem;
padding: 0.2rem 2rem;
left: 50%;
bottom: -3.5rem;
transform: translate(-50%,-50%) scaleX(0);
opacity: 1;
`;

export const MethodoIconWrapper = styled.div`
    position: relative;
    &:hover {
        ${media.md} {
            & ${MethodoLabel} {
            transform: translate(-50%,-50%) scaleX(1);
            opacity: 1;
            transition: ${transitions.easeOut2ms};

            & ${MethodoLabelContent} {
                transform: scaleX(1);
                opacity: 1;
                transition: ${transitions.easeOut2ms};
                transition-delay: 0.1s;
            } 
        }
        }
    }
`;


const MethodoIcon = (props) => {
    return <>
        <MethodoIconWrapper>
        <StyledReactSVG src={props.src} />
        <MethodoLabel mainCol={props.mainCol}><MethodoLabelContent isLightText={props.isLightText}>{props.MethodoLabel}</MethodoLabelContent></MethodoLabel>
        </MethodoIconWrapper>
    </>

};


export default MethodoIcon;