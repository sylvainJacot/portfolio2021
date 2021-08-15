import styled from "styled-components";
import { colorsRoles } from "../../01-atoms/colors";
import { PhotoRetoucherProjects } from "../../data/skills/projects/photo-projects"; 
import {useRouteMatch} from "react-router-dom";
import SkillPageProjectPhotoItem from "./SkillPageProjectPhotoItem";


export const Wrapper = styled.section`
position: relative;
width: 100%;
height: 100%;
background-color: ${colorsRoles.white};
display: flex;
flex-wrap: wrap;
justify-content: center;
padding-bottom: 40px;
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

