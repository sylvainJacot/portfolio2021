import { useEffect } from "react";
import BackButton from "../../02-molecules/CallToAction/BackButton"
import ProjectItemDetailHeader from "../../03-organisms/projectItemdetail/ProjectItemDetailHeader"
import ProjectItemDetailMainTitle from "../../03-organisms/projectItemdetail/ProjectItemDetailMainTitle";
import ProjectItemDetailContentPhotoWrapper from "../../03-organisms/projectItemdetail/ProjectItemDetailContentPhotoWrapper";
import { PhotoRetoucherProjects } from "../../data/skills/projects/photo-projects";


const PhotoRetoucherProject = ({match}) => {

    const Project = PhotoRetoucherProjects.find(({ slug }) => slug === match.params.slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return <>
    <BackButton />
    <ProjectItemDetailHeader
        isPhotoProjectHeader={true}
        isDefaultProjectHeader={false}
        mainColor={Project.mainColor}
        headerbgimge={Project.thumbnailproject}
    />
    <ProjectItemDetailMainTitle
        isPhotoRetoucher={false}
        mainTitle={Project.title}
        mainColor={Project.mainColor}
        roles={Project.roles}
        titleRole={Project.titleRole}
        descriptionRole={Project.descriptionRole}
    />
    {/* <ProjectItemDetailImageDivider decoImage={Project.headerImage}/> */}
    <ProjectItemDetailContentPhotoWrapper 
        videoportrait={Project.videoportrait}
        videolandscape={Project.videolandscape}
        landscape={Project.landscape}
        carre={Project.carre}
        rectanglelandscape={Project.rectanglelandscape}
        rectangleportrait={Project.rectangleportrait}
        src={Project.src}
        alt={Project.altImg}
        bigPicture={Project.bigPicture}
        fullheight={Project.fullheight}
        fullwidth={Project.fullwidth}
        pictureItem={Project.images}
    />
    </>

};


export default PhotoRetoucherProject;