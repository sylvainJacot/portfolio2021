import React from "react";
import styled from "styled-components";
import ResponsiveImage from "../../02-molecules/images/ResponsiveImage";
import {Link} from "react-router-dom";
import { colorsRoles, shadows } from "../../01-atoms/colors";
import { transitions } from "../../01-atoms/animations/transitions";
import { fontsFamilies } from "../../01-atoms/GlobalStyle";
import media from "../../01-atoms/mediaqueries/MediaQueries";


export const PictureLabel = styled.div`
position: absolute;
width: 102%;
height: 56px;
bottom: 0px;
display: flex;
justify-content: center;
align-items: center;
border-top: none;
background-color: ${colorsRoles.White};
border-radius: 0px 0px 4px 4px;
z-index: 0;
transition: ${transitions.easeOut3ms};

& h3 {
    font-family: ${fontsFamilies.poppinsRegular};
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${colorsRoles.DarkGrey};
}

    ${media.md}{
        bottom: -56px;
        & h3 {
         opacity: 0;
         transform: scaleY(0);
         transform-origin: center bottom;
        }
    }

`;

export const Wrapper = styled(Link)`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
width: 320px;
height: auto;
margin: 40px;
background-color: grey;
box-shadow: ${shadows.shadowPicture};
overflow: hidden;
border-radius: 0.5rem;
transition: ${transitions.easeOut3ms};

&:hover {
  ${media.md}{

    transform: translateY(-0.5rem);
    transition: ${transitions.easeOut3ms};

  ${PictureLabel} {
     bottom: 0px;
     transition: ${transitions.easeOut3ms};

     & h3 {
         opacity: 1;
         transform: scaleY(1);
         transition: ${transitions.easeOut2ms};
         transition-delay: 0.15s;
     }

   }

   img {
       transform: scale(1.05);
       transition: ${transitions.easeOut3ms};
   }

    }
}
    & img {
        width: 100%;
        min-height: 100%;
        object-fit: cover;
        transition: ${transitions.easeOut3ms};
        z-index: 10;
    }

`;


const SkillPageProjectPhotoItem = (props) => {
    return <>
        <Wrapper to={props.slug}>
                <ResponsiveImage
                srcDesktop={props.thumbnail}
                srcMobile={props.thumbnail}
            />
            <PictureLabel>
                <h3>{props.title}</h3>
            </PictureLabel>
        </Wrapper>
    </>

};

export default SkillPageProjectPhotoItem;