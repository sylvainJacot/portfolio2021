
import styled from "styled-components";
import { GridWrapper } from "../../01-atoms/layout/Grid";
import Row from "../../01-atoms/layout/Row";
import { devMethodo, photoMethodo, uiuxMethodo } from "../../data/skills/skills-data";
import {HeadingSecondaryStyle} from "../../01-atoms/typography/headings/HeadingSecondary"
import media from "../../01-atoms/mediaqueries/MediaQueries";
import { colorsRoles } from "../../01-atoms/colors";
import MethodoIcon from "../../02-molecules/clientsicons/ClientIcon";

export const MethodoIconsWrapper = styled(Row)`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    > div {
        margin: 1rem;
    }
`

export const Wrapper = styled(GridWrapper)`
    padding: 5rem 0;
    ${media.md} {
    padding: 8rem 0;
    }
    ${media.lg} {
    padding: 9rem 0;
    }
`;

export const HeadingSecondaryStyled = styled(HeadingSecondaryStyle)`
    margin: 2rem 0;
`

const SkillPageMethodology = ({isUXUI,isDEV,isPHOTO}) => {

    return <>

            <Wrapper>
                <Row
                    StartSm={3}
                    EndSm={16}
                    StartMd={4}
                    EndMd={19}
                    StartLg={4}
                    EndLg={19}
                >
            <HeadingSecondaryStyled Positive={true}>Methodo</HeadingSecondaryStyled>
                <MethodoIconsWrapper>
                        {
                            isUXUI && uiuxMethodo.map((item,index) => 
                            <MethodoIcon 
                            key={index}
                            src={item.MethodoLogo}
                            />
                                        
                            )
                        }
                                            {
                            isDEV && devMethodo.map((item,index) => 
                            <MethodoIcon 
                            key={index}
                            src={item.MethodoLogo}
                            />
                            )
                        }
                                            {
                            isPHOTO && photoMethodo.map((item,index) => 
                            <MethodoIcon 
                            key={index}
                            src={item.MethodoLogo}
                            />
                            )
                        }
                </MethodoIconsWrapper>
                </Row>
            </Wrapper>
    </>

};

export default SkillPageMethodology;

