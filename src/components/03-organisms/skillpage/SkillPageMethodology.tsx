import{FC, useContext} from "react"
import styled from "styled-components";
import Grid, { GridWrapper } from "../../01-atoms/layout/Grid";
import Row from "../../01-atoms/layout/Row";
import MethodoIcon from "../../02-molecules/methodoicon/MethodoIcon";
import { devMethodo, photoMethodo, uiuxMethodo } from "../../data/skills/skills-data";
import {HeadingSecondaryStyle} from "../../01-atoms/typography/headings/HeadingSecondary"
import media from "../../01-atoms/mediaqueries/MediaQueries";
import { colorsRoles } from "../../01-atoms/colors";
import GlobalStyle from "../../01-atoms/GlobalStyle";
import { GlobalContext } from "../../data/contexts/global/GlobalProvider";


type ISkillProps = {
    isUXUI? : boolean;
    isDEV? : boolean;
    isPHOTO? : boolean;
}

export const MethodoIconsWrapper = styled(Row)`
    display: flex;
    justify-content: center;
    > div {
        margin: 1rem;
    }
`

export const Wrapper = styled(GridWrapper)`
    background-color: ${colorsRoles.LightGrey};
    padding: 5rem 0;
    ${media.md} {
    padding: 6rem 0;
    }
`;

export const HeadingSecondaryStyled = styled(HeadingSecondaryStyle)`
    margin: 2rem 0;
`

const SkillPageMethodology:FC<ISkillProps> = ({isUXUI,isDEV,isPHOTO}) => {

    const {navBarSize} = useContext(GlobalContext)

    return <>

            <Wrapper navBarSize = {navBarSize}>
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

