import {FC} from "react"
import styled from "styled-components";
import ClientIcon from "../../02-molecules/clientsicons/ClientIcon";
import { devClients, photoClients, uiuxClients } from "../../data/skills/skills-data";


type ISkillProps = {
    isUXUI? : boolean;
    isDEV? : boolean;
    isPHOTO? : boolean;
}

export const Wrapper = styled.div`

`;

export const HeaderClients = styled.aside`
    display: flex;
`;

const SkillPageClients:FC<ISkillProps> = ({isUXUI,isDEV,isPHOTO}) => {
    return <>
            <Wrapper>

                I collaborated with

                <HeaderClients>
                            {
                                isUXUI && uiuxClients.map((client,index) => 
                                    <ClientIcon 
                                        key={index}
                                        src={client.ClientLogo}
                                    />
                                )
                            }
                            {
                                isDEV && devClients.map((client,index) => 
                                    <ClientIcon 
                                        key={index}
                                        src={client.ClientLogo}
                                    />
                                )
                            }
                            {
                                isPHOTO && photoClients.map((client,index) => 
                                    <ClientIcon 
                                        key={index}
                                        src={client.ClientLogo}
                                    />
                                )
                            }
                    </HeaderClients>
            </Wrapper>
    </>

};

export default SkillPageClients;

