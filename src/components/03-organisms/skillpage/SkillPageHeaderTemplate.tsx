import { FC } from 'react';
import styled from "styled-components";
import {  colorsRoles, gradients } from '../../01-atoms/colors';
import { fontsFamilies } from '../../01-atoms/GlobalStyle';
import Grid from '../../01-atoms/layout/Grid';
import Row from '../../01-atoms/layout/Row';
import media from '../../01-atoms/mediaqueries/MediaQueries';
import { skills } from "../../data/skills/skills-data";


type ISkillProps = {
    isUXUI? : boolean;
    isDEV? : boolean;
    isPHOTO? : boolean;
}

export const HeaderPicture = styled.img`
    width: 100%;
    max-width: 25rem;
    margin: 0 auto;
`;

export const HeaderPictureWrapper = styled(Row)`
    display: flex;
`;

export const HeaderTextContent = styled(Row)`
    h1 {
       font-family:  ${fontsFamilies.poppinsBold};
        color: ${colorsRoles.White};
    }
    p{
        font-family: ${fontsFamilies.poppinsRegular};
        color: ${colorsRoles.White};
    }
`;

export const HeaderTopWrapperGrid = styled(Grid)`

`;



export const HeaderWrapper = styled.header`
    border-bottom-left-radius: 50% 8%;
    border-bottom-right-radius: 50% 8%;
    ${gradients.DarkGreyLeftToRight};
    padding-bottom: 4rem;

    ${media.sm} {
    border-bottom-left-radius: 50% 20%;
    border-bottom-right-radius: 50% 20%;
    }
`;

const SkillPageHeaderTemplate:FC<ISkillProps> = ({isUXUI,isDEV,isPHOTO}) => {


    return <>

        <HeaderWrapper>

                <HeaderTopWrapperGrid>

                    <HeaderPictureWrapper
                        StartXs={2}
                        EndXs={9}
                    >

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

                    <HeaderTextContent
                    StartXs={2}
                    EndXs={9}
                    StartSm={1}
                    EndSm={17}
                    StartMd={10}
                    EndMd={21}
                    StartLg={10}
                    EndLg={21}
                    >
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
                    
                </HeaderTopWrapperGrid>
        
        </HeaderWrapper>

    </>

};


export default SkillPageHeaderTemplate;