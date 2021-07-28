import {FC} from "react"
import styled from "styled-components";
import Grid from "../../01-atoms/layout/Grid";
import Row from "../../01-atoms/layout/Row";
import ClientIcon from "../../02-molecules/clientsicons/ClientIcon";
import { devClients, photoClients, uiuxClients } from "../../data/skills/skills-data";
import HeadingSecondary, { HeadingSecondaryStyle } from "../../01-atoms/typography/headings/HeadingSecondary";
import media from "../../01-atoms/mediaqueries/MediaQueries";


type ISkillProps = {
    isUXUI? : boolean;
    isDEV? : boolean;
    isPHOTO? : boolean;
}

export const Wrapper = styled(Row)`
    padding: 5rem 0;
    ${media.sm} {
    padding: 6rem 0;
    }
    ${media.md} {
    padding: 6rem 0;
    }
`;

export const HeadingSecondaryStyled = styled(HeadingSecondaryStyle)`
    margin: 2rem;
`

export const HeaderClients = styled.aside`
    display: flex;
    flex-wrap: wrap;  
    justify-content: center;
    > div {
        margin: 1rem;
    }
`;


const SkillPageClients:FC<ISkillProps> = ({isUXUI,isDEV,isPHOTO}) => {
    return <>
        <Grid>
            <Wrapper
            StartSm={3}
            EndSm={16}
            StartMd={4}
            EndMd={19}
            StartLg={4}
            EndLg={19}
            >

                <HeadingSecondaryStyled Positive={true}>I collaborated with</HeadingSecondaryStyled>

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

