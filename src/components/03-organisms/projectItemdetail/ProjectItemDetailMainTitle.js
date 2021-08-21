
import { useContext } from "react";
import styled from "styled-components";
import { colorsRoles } from "../../01-atoms/colors";
import { gridSideMargins } from "../../01-atoms/layout/Grid";
import media from "../../01-atoms/mediaqueries/MediaQueries";
import { HeadingProjectStyle } from "../../01-atoms/typography/headings/HeadingProject";
import { GlobalContext } from "../../data/contexts/global/GlobalProvider";
import ProjectItemDetailMainTitleShortDesc from "./ProjectItemDetailMainTitleShortDesc";


export const Box = styled.div`
background-color: ${colorsRoles.White};
padding: 2rem 0;

${media.sm} {
    padding: 4rem 0;
}

${media.md} {
padding: ${props => props.isPhotoRetoucher? "6rem 0 6rem 0" : "5rem 0 5rem 0"};
width: calc(100% - ${props => props.navBarSize}px);
}
`;

export const ShortDescriptionWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 3rem;

    ${media.sm} {
    flex-direction: row;
    align-items: unset;
    justify-content: center;
    margin-top: 4rem;
    };

    ${media.md} {
        padding: 0px ${gridSideMargins.md};
    }
    ${media.lg} {
        padding: 0px ${gridSideMargins.lg};
    }

`;

export const HeadingProjectStyleExtended = styled(HeadingProjectStyle)`
    color: ${(props) => props.mainColor};
`;


const ProjectItemDetailMainTitle = ({isPhotoRetoucher, ...props}) => {

    const Roles = props.roles;

    const {navBarSize} = useContext(GlobalContext);

    return <>
            <Box isPhotoRetoucher={isPhotoRetoucher} navBarSize={navBarSize}>
                  <HeadingProjectStyleExtended Positive={true} textCenterM={true} textCenterL={true} mainColor={props.mainColor}>{props.mainTitle}</HeadingProjectStyleExtended>

                  <ShortDescriptionWrapper>

                            {
                            Roles.map((item,index) => (
                                <ProjectItemDetailMainTitleShortDesc
                                    key={index}
                                    titleRole={item.titleRole}
                                    descriptionRole={item.descriptionRole}
                                />
                            ))

                            }

                  </ShortDescriptionWrapper>
            </Box>
        </>

};

export default ProjectItemDetailMainTitle;


