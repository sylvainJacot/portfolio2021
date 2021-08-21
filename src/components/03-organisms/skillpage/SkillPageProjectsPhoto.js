import styled from "styled-components";
import { colorsRoles } from "../../01-atoms/colors";
import { PhotoRetoucherProjects } from "../../data/skills/projects/photo-projects"; 
import {useRouteMatch} from "react-router-dom";
import SkillPageProjectPhotoItem from "./SkillPageProjectPhotoItem";
import media from "../../01-atoms/mediaqueries/MediaQueries";
import { colSizes, gridFullWidth, gridSideMargins } from "../../01-atoms/layout/Grid";


export const Wrapper = styled.section`
position: relative;
width: 100%;
height: 100%;
background-color: ${colorsRoles.white};
display: grid;
justify-content: center;
grid-row-gap: 4rem;
padding: 4rem ${gridSideMargins.xs};

${media.sm} {
    padding: 4rem ${gridSideMargins.sm};
    grid-template-columns: repeat(2,1fr);
    grid-column-gap: ${colSizes.sm};
    justify-items: center;
}
${media.md} {
    width: calc(${gridFullWidth.md});
    padding: 6rem 0;
    margin: 0 auto;
    grid-gap: ${colSizes.md};
}
${media.lg} {
    width: calc(${gridFullWidth.lg});
    grid-template-columns: repeat(3,1fr);
    padding: 6rem 0;
    grid-gap: ${colSizes.lg};
}

`;

const SkillPageProjectsPhoto = () => {
    let { url } = useRouteMatch();
    return <>
        <Wrapper>
            {
                PhotoRetoucherProjects.map((project,index) =>(
                    <SkillPageProjectPhotoItem
                        key={index}
                        thumbnail={project.thumbnailproject}
                        title={project.title}
                        slug={`${url}/${project.slug}`}
                    />
                ))
            }
        </Wrapper>
    </>

};

export default SkillPageProjectsPhoto;

