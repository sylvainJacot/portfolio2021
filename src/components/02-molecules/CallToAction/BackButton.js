import styled from "styled-components";
import {useHistory} from "react-router-dom";
import { colorsRoles, shadows } from "../../01-atoms/colors";
import media from "../../01-atoms/mediaqueries/MediaQueries";
import icons from "../../01-atoms/icons/icons";
import { ReactSVG } from "react-svg";

export const BackButtonWrapper = styled.button`
position: fixed;
z-index: 5;
top: 90%;
left: 16px;
width: 48px;
height: 48px;
background-color: ${colorsRoles.White};
border: none;
border-radius: 50%;
box-shadow: ${shadows.shadowButton};

${media.md}{
top: 24px;
left: 24px;
}

& svg {
transform: rotateY(-180deg);
fill: ${colorsRoles.DarkGrey};
width: 24px;
height: 24px;
    & path {
        fill: ${colorsRoles.DarkGrey};
    }
}

`;

const BackButton = () => {

    let History = useHistory();


    const handleBackHistory = () => {
        History.goBack()
    }

    return <>
        <BackButtonWrapper
        onClick={handleBackHistory}
        > 
    <ReactSVG src={icons.Arrow}/>
        </BackButtonWrapper>
    </>

};

export default BackButton;