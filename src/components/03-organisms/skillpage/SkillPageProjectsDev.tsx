import styled from "styled-components";
import {useRouteMatch} from "react-router-dom";
import { colorsRoles } from "../../01-atoms/colors";
import media from "../../01-atoms/mediaqueries/MediaQueries";
import { CreativeDeveloperProjects } from "../../data/skills/projects/dev-projects";
import SkillPageProjectDevItem from "./SkillPageProjectDevItem";


export const NavCreativeDeveloperProjectsWrapper = styled.section`
width: 100%;
background-color: ${colorsRoles.White};
padding-top: 88px;

${media.md}{
padding-top: 0px;
}

`;

const SkillPageProjectsDev = () => {

    let { url } = useRouteMatch();

    return <>
    <NavCreativeDeveloperProjectsWrapper>

    {
            CreativeDeveloperProjects.map((project,index) => (
                <SkillPageProjectDevItem
                key={index}
                // field={project.fields}
                title={project.title}
                description={project.description}
                slug={`${url}/${project.slug}`}
                // Tools={project.madeWith}
                // TextColor={project.maincolor}
                imgsrc={project.thumbnailproject}
                />
            ))
        }

    </NavCreativeDeveloperProjectsWrapper>

    </>

};

export default SkillPageProjectsDev;

