import styled from "styled-components";
import Row from "../../01-atoms/layout/Row";
import ClientIcon from "../../02-molecules/clientsicons/ClientIcon";
import { devClients, photoClients, uiuxClients } from "../../data/skills/skills-data";
import  { HeadingSecondaryStyle } from "../../01-atoms/typography/headings/HeadingSecondary";
import media from "../../01-atoms/mediaqueries/MediaQueries";
import { colorsRoles } from "../../01-atoms/colors";
import { gridSideMargins } from "../../01-atoms/layout/Grid";

export const Wrapper = styled(Row)`
    padding: 5rem ${gridSideMargins.xs};
    background-color: ${colorsRoles.LightGrey};
    ${media.sm} {
    padding: 6rem ${gridSideMargins.sm};
    }
    ${media.md} {
    padding: 8rem ${gridSideMargins.md};
    }
    ${media.lg} {
    padding: 9rem ${gridSideMargins.lg};
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


const SkillPageClients = ({isUXUI,isDEV,isPHOTO}) => {
    return <>

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
                                        fill={true}
                                    />
                                )
                            }
                            {
                                isDEV && devClients.map((client,index) => 
                                    <ClientIcon 
                                        key={index}
                                        src={client.ClientLogo}
                                        fill={true}
                                    />
                                )
                            }
                            {
                                isPHOTO && photoClients.map((client,index) => 
                                    <ClientIcon 
                                        key={index}
                                        src={client.ClientLogo}
                                        fill={true}
                                    />
                                )
                            }
                    </HeaderClients>
            </Wrapper>

    </>

};

export default SkillPageClients;

