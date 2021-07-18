import{FC} from "react"
import styled from "styled-components";
import Grid from "../../01-atoms/layout/Grid";
import Row from "../../01-atoms/layout/Row";
import MethodoIcon from "../../02-molecules/methodoicon/MethodoIcon";
import { devMethodo, photoMethodo, uiuxMethodo } from "../../data/skills/skills-data";
import {HeadingSecondaryStyle} from "../../01-atoms/typography/headings/HeadingSecondary"


type ISkillProps = {
    isUXUI? : boolean;
    isDEV? : boolean;
    isPHOTO? : boolean;
}

export const MethodoIconsWrapper = styled(Row)`
    display: flex;
`

export const Wrapper = styled(Grid)`

`;

export const HeadingSecondaryStyled = styled(HeadingSecondaryStyle)`
    margin: 2rem 0;
`

const SkillPageMethodology:FC<ISkillProps> = ({isUXUI,isDEV,isPHOTO}) => {
    return <>

            <Wrapper>
                <Row
                    StartSm={3}
                    EndSm={15}
                    StartMd={10}
                    EndMd={21}
                    StartLg={10}
                    EndLg={21}
                >
            <HeadingSecondaryStyled Positive={true}>Methodo</HeadingSecondaryStyled>
                <MethodoIconsWrapper>
                        {
                            isUXUI && uiuxMethodo.map((item) => 
                                <MethodoIcon
                                src={item.MethodoLogo}
                                />
                            )
                        }
                                            {
                            isDEV && devMethodo.map((item) => 
                                <MethodoIcon
                                src={item.MethodoLogo}
                                />
                            )
                        }
                                            {
                            isPHOTO && photoMethodo.map((item) => 
                                <MethodoIcon
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

