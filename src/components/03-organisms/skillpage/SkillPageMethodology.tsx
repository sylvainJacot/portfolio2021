import{FC} from "react"
import styled from "styled-components";
import MethodoIcon from "../../02-molecules/methodoicon/MethodoIcon";
import { devMethodo, photoMethodo, uiuxMethodo } from "../../data/skills/skills-data";


type ISkillProps = {
    isUXUI? : boolean;
    isDEV? : boolean;
    isPHOTO? : boolean;
}

export const MethodoIconsWrapper = styled.div`

`

export const Wrapper = styled.section`

`;

const SkillPageMethodology:FC<ISkillProps> = ({isUXUI,isDEV,isPHOTO}) => {
    return <>

            <Wrapper>
                    Methodo
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

