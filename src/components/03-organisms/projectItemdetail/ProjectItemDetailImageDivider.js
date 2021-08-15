
import styled from "styled-components";
import media from "../../01-atoms/mediaqueries/MediaQueries";

export const Box = styled.div`

width: 100%;
height: 200px;
background-image: url(${(props) => props.decoImage});
background-position: center; 
background-repeat: no-repeat;
background-size: cover; 

${media.lg} {
height: 400px;
}

`;

const ProjectItemDetailImageDivider = (props) => {
    return <>

        <Box decoImage={props.decoImage}></Box>
    </>

};

export default ProjectItemDetailImageDivider;

