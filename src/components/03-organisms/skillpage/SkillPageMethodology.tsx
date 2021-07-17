import{FC} from "react"
import styled from "styled-components";
import Grid from "../../01-atoms/layout/Grid";
import Row from "../../01-atoms/layout/Row";
import MethodoIcon from "../../02-molecules/methodoicon/MethodoIcon";
import { devMethodo, photoMethodo, uiuxMethodo } from "../../data/skills/skills-data";


type ISkillProps = {
    isUXUI? : boolean;
    isDEV? : boolean;
    isPHOTO? : boolean;
}

export const MethodoIconsWrapper = styled(Row)`
    display: flex;
`

export const H3 = styled(Row)`
    text-align: center;
`

export const Wrapper = styled(Grid)`

`;

const SkillPageMethodology:FC<ISkillProps> = ({isUXUI,isDEV,isPHOTO}) => {
    return <>

            <Wrapper>
            <H3>Methodo</H3>
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
            </Wrapper>
    </>

};

export default SkillPageMethodology;

