
import styled from "styled-components";
import {useRouteMatch} from "react-router-dom";
import { colorsRoles } from "../../01-atoms/colors";
import media from "../../01-atoms/mediaqueries/MediaQueries";
import { CreativeDeveloperProjects } from "../../data/skills/projects/dev-projects";
import SkillPageProjectDevItem from "./SkillPageProjectDevItem";
import { useContext } from "react";
import { GlobalContext } from "../../data/contexts/global/GlobalProvider";



export const NavCreativeDeveloperProjectsWrapper = styled.section`
width: 100%;
background-color: ${colorsRoles.White};

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
                fields={project.fields}
                title={project.title}
                description={project.description}
                slug={`${url}/${project.slug}`}
                Tools={project.madeWith}
                TextColorc
                bgCTA={project.mainColor}
                imgsrc={project.thumbnailproject}
                mainColor={project.mainColor}
                />
            ))
        }

    </NavCreativeDeveloperProjectsWrapper>

    </>

};

export default SkillPageProjectsDev;

