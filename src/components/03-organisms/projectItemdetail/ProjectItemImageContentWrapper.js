
import { useContext } from "react";
import styled from "styled-components";
import media, { size } from "../../01-atoms/mediaqueries/MediaQueries";
import { GlobalContext } from "../../data/contexts/global/GlobalProvider";
import ProjectItemImageContent from "./ProjectItemImageContent";


export const ImageProjectsWrapper = styled.div`
    padding: 4rem 0;

    ${media.sm} {
        padding: 6rem 0;
    }

    ${media.md} {
        width: calc(100% - ${({navBarSize}) => navBarSize}px);
    }
    ${media.lg} {
        padding: 8rem 0;
    }
`;

const ProjectItemImageContentWrapper = (props) => {

    const ImageProjects = props.imageProjects;

    const {navBarSize} = useContext(GlobalContext);

    return <>
            <ImageProjectsWrapper navBarSize={navBarSize}>
            {
                ImageProjects.map((item,index) => (
                    <ProjectItemImageContent
                        key={index}
                        sourceDesktop={item.srcDesktop}
                        sourceMobile={item.srcMobile}
                        breakPoint={size.sm}
                        altImage={item.altImg}
                        bgColor={item.bgColor}
                    />
                ))

            }
            </ImageProjectsWrapper>
    </>

};

export default ProjectItemImageContentWrapper;







