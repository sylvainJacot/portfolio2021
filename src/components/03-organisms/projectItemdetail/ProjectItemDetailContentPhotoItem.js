import {useState} from "react";
import styled, {css} from "styled-components";
import LightBoxPicture from "../../02-molecules/lightbox/LightBoxPicture";
import media from "../../01-atoms/mediaqueries/MediaQueries";
import { colorsRoles, shadows } from "../../01-atoms/colors";
import { transitions } from "../../01-atoms/animations/transitions";


export const Wrapper = styled.a`
display: block;
width: ${props => props.bigPicture? "50%" : "240px"};
flex-grow: ${props => props.bigPicture? "2" : "1"};
margin: 32px;

${media.sm}{
width: ${props => props.bigPicture? "50%" : "200px"};
}
${media.md}{
width: ${props => props.bigPicture? "50%" : "240px"};
}

`;


export const AspectRatio = styled.div`
overflow: hidden;
position: relative;
height: max-content;
box-shadow: ${shadows.shadowPicture};
overflow: hidden;
border-radius: 8px;

&:before {
position: absolute;
content: "";
display: block;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: ${colorsRoles.White};
opacity: 0;
transition: ${transitions.easeOut3ms};
cursor:pointer;
z-index: 3;
}

img {
        transition: ${transitions.easeOut3ms};
    }

&:hover {
    img {
        transform: scale(1.05);
        transition: ${transitions.easeOut3ms};
    }
    &:before {
    opacity: 0.2;
    transition: ${transitions.easeOut3ms};
    }
}

${(props) => {
    return (
        props.videoportrait &&
        css`
            {
            padding-top: calc(100% / (9 / 16));
            }
            `
    );
}}

${(props) => {
    return (
        props.videolandscape &&
        css`
            {
            padding-top: calc(100% / (16 / 9));
            }
            `
    );
}}

${(props) => {
    return (
        props.carre &&
        css`
            {
            padding-top: 100%;
            }
            `
    );
}}

${(props) => {
    return (
        props.rectanglelandscape &&
        css`
            {
            padding-top: calc(100% / (4 / 3));
            }
            `
    );
}}

${(props) => {
    return (
        props.rectangleportrait &&
        css`
            {
            padding-top: calc(100% / (3 / 4));
            }
            `
    );
}}



& img {
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
}


`;



const ProjectItemDetailContentPhotoItem = (props) => {

    const [active,setactive] = useState(false)

    const handleOnClick = () => {
        setactive(!active)
    }

    return <>
        <Wrapper bigPicture={props.bigPicture} onClick={handleOnClick}>
            <AspectRatio
                video={props.video}
                videoportrait={props.videoportrait}
                videolandscape={props.videolandscape}
                landscape={props.landscape}
                carre={props.carre}
                rectanglelandscape={props.rectanglelandscape}
                rectangleportrait={props.rectangleportrait}
            >
                <img src={props.src} alt={props.alt}/>
            </AspectRatio>
            <LightBoxPicture
                onClick={handleOnClick}
                isactive={active}
                src={props.src}
                alt={props.alt}
                fullheight={props.fullheight}
                fullwidth={props.fullwidth}
            />
        </Wrapper>

    </>

};

export default ProjectItemDetailContentPhotoItem;

