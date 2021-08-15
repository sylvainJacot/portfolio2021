import styled from "styled-components";
import media from "../../01-atoms/mediaqueries/MediaQueries";
import ResponsiveImage from "../../02-molecules/images/ResponsiveImage";

export const ImageProjectWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
background-color: ${props => props.bgColor};
    & picture {
    width: 100%;
        ${media.md}{
        width: 80%;
        }
        & img {
        width: 100%;
        }
    }
`;

const TemplateImageProject = (props) => {
    return <>
            <ImageProjectWrapper bgColor={props.bgColor}>
            <ResponsiveImage
                srcDesktop={props.sourceDesktop}
                srcMobile={props.sourceMobile}
                breakPoint={props.breakPoint}
                altImage={props.altImage}
            />
            </ImageProjectWrapper>

    </>

};

export default TemplateImageProject;