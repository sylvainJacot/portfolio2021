import { FC } from "react";
import BackButton from "../../02-molecules/CallToAction/BackButton"
import UxUiDesignerProjectHeader from "../../03-organisms/uxuidesignproject/UxUiDesignerProjectHeader"
import { UIUXProjects } from "../../data/skills/projects/uiux-projects";

type IUxUiDesignerProject = {
    match: any;
    slug: string;
    Project: any;
    mainColor: any;
    headerImage: any;
}

const UxUiDesignerProject:FC <IUxUiDesignerProject>= ({match}) => {



    const Project = UIUXProjects?.find(({ slug }) => slug === match.params.slug) || {};

    return <>
    <BackButton />
    <UxUiDesignerProjectHeader
        mainColor={Project.mainColor}
        headerImage={Project.headerImage}
    />
    </>

};


export default UxUiDesignerProject;