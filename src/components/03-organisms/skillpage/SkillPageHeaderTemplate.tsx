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
    top: 0;
    left: 0;
    height: 700px;
`;

export const HeaderPictureWrapper = styled.div`

`;

export const HeaderTextContent = styled.div`

`;

export const HeaderTopWrapper = styled.div`
    display: flex;
    align-items: center;
`;



export const HeaderWrapper = styled.header`
    padding: 5rem 0;
    border-bottom-left-radius: 50% 20%;
    border-bottom-right-radius: 50% 20%;
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
        
        </HeaderWrapper>

    </>

};


export default SkillPageHeaderTemplate;