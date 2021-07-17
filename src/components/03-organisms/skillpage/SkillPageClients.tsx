import {FC} from "react"
import styled from "styled-components";
import Grid, { colSizes } from "../../01-atoms/layout/Grid";
import Row from "../../01-atoms/layout/Row";
import ClientIcon from "../../02-molecules/clientsicons/ClientIcon";
import { devClients, photoClients, uiuxClients } from "../../data/skills/skills-data";


type ISkillProps = {
    isUXUI? : boolean;
    isDEV? : boolean;
    isPHOTO? : boolean;
}

export const Wrapper = styled(Row)`

`;

export const HeaderClients = styled.aside`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const SkillPageClients:FC<ISkillProps> = ({isUXUI,isDEV,isPHOTO}) => {
    return <>
        <Grid>
            <Wrapper
            StartXs={2}
            EndXs={9}
            StartSm={3}
            EndSm={15}
            StartMd={10}
            EndMd={21}
            StartLg={10}
            EndLg={21}
            >

                <h3>I collaborated with</h3>

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
            </Grid>
    </>

};

export default SkillPageClients;

