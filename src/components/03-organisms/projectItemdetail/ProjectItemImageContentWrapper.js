
import { useContext } from "react";
import styled from "styled-components";
import { gridSideMargins } from "../../01-atoms/layout/Grid";
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
        padding: 8rem ${gridSideMargins.md};
    }
    ${media.lg} {
        padding: 8rem ${gridSideMargins.lg};
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







