import { useContext } from "react";
import styled from "styled-components";
import { gridSideMargins } from "../../01-atoms/layout/Grid";
import media from "../../01-atoms/mediaqueries/MediaQueries";
import { GlobalContext } from "../../data/contexts/global/GlobalProvider";
import ProjectItemDetailContentPhotoItem from "./ProjectItemDetailContentPhotoItem";


export const GalleryWrapper = styled.div`
width: 100%;
height: 100%;
margin: auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
${media.md} {
    width: calc(100% - ${({navBarSize}) => navBarSize}px);
    margin: unset;
    padding: 0px ${gridSideMargins.md};
}
${media.lg} {
    width: calc(100% - ${({navBarSize}) => navBarSize}px);
    margin: unset;
    padding: 0px ${gridSideMargins.lg};
}
`;


const ProjectItemDetailContentPhotoWrapper = (props) => {

    const {navBarSize} = useContext(GlobalContext);
    let pictureComponent = props.pictureItem;

    return <>
            <GalleryWrapper navBarSize={navBarSize}>
            {
                pictureComponent.map((item,index) => (
                    <ProjectItemDetailContentPhotoItem
                        key={index}
                        video={item.video}
                        videoportrait={item.videoportrait}
                        videolandscape={item.videolandscape}
                        landscape={item.landscape}
                        carre={item.carre}
                        rectanglelandscape={item.rectanglelandscape}
                        rectangleportrait={item.rectangleportrait}
                        src={item.src}
                        alt={item.altImg}
                        bigPicture={item.bigPicture}
                        fullheight={item.fullheight}
                        fullwidth={item.fullwidth}
                    />
                ))
            }
            </GalleryWrapper>
    </>

};

export default ProjectItemDetailContentPhotoWrapper;

