
import styled from "styled-components";
import { gridSideMargins } from "../../01-atoms/layout/Grid";
import Row from "../../01-atoms/layout/Row";
import { devMethodo, photoMethodo, uiuxMethodo } from "../../data/skills/skills-data";
import {HeadingSecondaryStyle} from "../../01-atoms/typography/headings/HeadingSecondary"
import media from "../../01-atoms/mediaqueries/MediaQueries";
import MethodoIcon from "../../02-molecules/methodoicon/MethodoIcon";
import { colorsRoles } from "../../01-atoms/colors";

export const MethodoIconsWrapper = styled(Row)`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    > div {
        margin: 1rem;
    }
`

export const Wrapper = styled.section`
    padding: 5rem ${gridSideMargins.xs};
    ${media.sm} {
        padding: 5rem ${gridSideMargins.sm};
    }
    ${media.md} {
    padding: 8rem ${gridSideMargins.md};
    }
    ${media.lg} {
    padding: 9rem ${gridSideMargins.lg};
    }
`;

export const HeadingSecondaryStyled = styled(HeadingSecondaryStyle)`
    margin: 2rem auto;
`

const SkillPageMethodology = ({isUXUI,isDEV,isPHOTO,mainTitle}) => {

    return <>

            <Wrapper>
            <HeadingSecondaryStyled Positive={true}>{mainTitle}</HeadingSecondaryStyled>
                <MethodoIconsWrapper>
                        {
                            isUXUI && uiuxMethodo.map((item,index) => 
                            <MethodoIcon 
                            key={index}
                            src={item.MethodoLogo}
                            mainCol={colorsRoles.uiCol}
                            MethodoLabel={item.MethodoName}
                            />
                                        
                            )
                        }
                                            {
                            isDEV && devMethodo.map((item,index) => 
                            <MethodoIcon 
                            key={index}
                            src={item.MethodoLogo}
                            mainCol={colorsRoles.frontCol}
                            isLightText={true}
                            MethodoLabel={item.MethodoName}
                            />
                            )
                        }
                                            {
                            isPHOTO && photoMethodo.map((item,index) => 
                            <MethodoIcon 
                            key={index}
                            src={item.MethodoLogo}
                            mainCol={colorsRoles.retouchCol}
                            MethodoLabel={item.MethodoName}
                            />
                            )
                        }
                </MethodoIconsWrapper>
            </Wrapper>
    </>

};

export default SkillPageMethodology;

