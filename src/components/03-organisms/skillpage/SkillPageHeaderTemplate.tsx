import { FC } from 'react';
import styled from "styled-components";
import { colorsRoles, gradients } from '../../01-atoms/colors';
import ClientIcon from "../../02-molecules/clientsicons/ClientIcon";
import { devClients, photoClients, skills, uiuxClients } from "../../data/skills/skills-data";


type ISkillProps = {
    isUXUI? : boolean;
    isDEV? : boolean;
    isPHOTO? : boolean;
}

export const HeaderPicture = styled.img`
    position: absolute;
`;

export const HeaderPictureWrapper = styled.div`

`;

export const HeaderTextContent = styled.div`

`;

export const HeaderTopWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const HeaderClients = styled.aside`
    display: flex;
`;

export const HeaderWrapper = styled.header`
    padding: 5rem 0;
    ${gradients.DarkGreyLeftToRight};
`;

const SkillPageHeaderTemplate:FC<ISkillProps> = ({isUXUI,isDEV,isPHOTO}) => {


    return <>

        <HeaderWrapper>

                <HeaderTopWrapper>

                    <HeaderPictureWrapper>

                    {
                            isUXUI && 
                            <HeaderPicture src={skills[0].SkillHeroImg} alt={skills[0].SkillTitle}/>
                        }
                                                {
                            isDEV && 
                            <HeaderPicture src={skills[1].SkillHeroImg} alt={skills[1].SkillTitle}/>
                        }
                                                {
                            isPHOTO && 
                            <HeaderPicture src={skills[2].SkillHeroImg} alt={skills[2].SkillTitle}/>
                        }


                    </HeaderPictureWrapper>

                    <HeaderTextContent>
                        {
                            isUXUI && 
                            <>
                            <h1>{skills[0].SkillTitle}</h1>
                            <p>{skills[0].SkillIntro}</p>
                            </>
                        }
                                                {
                            isDEV && 
                            <>
                            <h1>{skills[1].SkillTitle}</h1>
                            <p>{skills[1].SkillIntro}</p>
                            </>
                        }
                                                {
                            isPHOTO && 
                            <>
                            <h1>{skills[2].SkillTitle}</h1>
                            <p>{skills[2].SkillIntro}</p>
                            </>
                        }
                        
                    </HeaderTextContent>
                    
                </HeaderTopWrapper>
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
        
        </HeaderWrapper>

    </>

};


export default SkillPageHeaderTemplate;