
import {useEffect} from "react";
import BackButton from "../../02-molecules/CallToAction/BackButton"
import ProjectItemDetailHeader from "../../03-organisms/projectItemdetail/ProjectItemDetailHeader"
import ProjectItemDetailImageDivider from "../../03-organisms/projectItemdetail/ProjectItemDetailImageDivider";
import ProjectItemDetailMainTitle from "../../03-organisms/projectItemdetail/ProjectItemDetailMainTitle";
import ProjectItemImageContentWrapper from "../../03-organisms/projectItemdetail/ProjectItemImageContentWrapper";
import { UIUXProjects } from "../../data/skills/projects/uiux-projects";


const UxUiDesignerProject = ({match}) => {


    const Project = UIUXProjects.find(({ slug }) => slug === match.params.slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return <>
    <BackButton />
    <ProjectItemDetailHeader
        isPhotoProjectHeader={false}
        isDefaultProjectHeader={true}
        mainColor={Project.mainColor}
        headerImage={Project.headerImage}
    />
    <ProjectItemDetailMainTitle
        isPhotoRetoucher={false}
        mainTitle={Project.title}
        mainColor={Project.mainColor}
        roles={Project.roles}
        titleRole={Project.titleRole}
        descriptionRole={Project.descriptionRole}
    />
    <ProjectItemDetailImageDivider decoImage={Project.decorativeimage}/>

    <ProjectItemImageContentWrapper
        imageProjects={Project.images}
    />
    </>

};


export default UxUiDesignerProject;