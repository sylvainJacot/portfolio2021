import { FC } from 'react';
import styled from "styled-components";
import { gradients } from '../../01-atoms/colors';
import Grid from '../../01-atoms/layout/Grid';
import Row from '../../01-atoms/layout/Row';
import media from '../../01-atoms/mediaqueries/MediaQueries';
import { skills } from "../../data/skills/skills-data";
import HeadingPrimary from '../../01-atoms/typography/headings/HeadingPrimary';
import ParagraphPrimary, { Paragraph } from '../../01-atoms/typography/paragraphs/ParagraphPrimary';


type ISkillProps = {
    isUXUI? : boolean;
    isDEV? : boolean;
    isPHOTO? : boolean;
}

export const HeaderPicture = styled.img`
    width: 100%;
    max-width: 20rem;
    margin: 0 auto;
`;

export const HeaderPictureWrapper = styled(Row)`
    display: flex;
`;

export const ParagraphPrimaryStyled = styled(Paragraph)`
    margin-top: 2rem;
`

export const HeaderTextContent = styled(Row)`

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
                    StartXs={1}
                    EndXs={11}
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
                            <HeadingPrimary Color={skills[0].SkillColor}>{skills[0].SkillTitle}</HeadingPrimary>
                            <ParagraphPrimaryStyled>{skills[0].SkillIntro}</ParagraphPrimaryStyled>
                            </>
                        }
                                                {
                            isDEV && 
                            <>
                            <HeadingPrimary Color={skills[1].SkillColor}>{skills[1].SkillTitle}</HeadingPrimary>
                            <ParagraphPrimaryStyled>{skills[1].SkillIntro}</ParagraphPrimaryStyled>
                            </>
                        }
                                                {
                            isPHOTO && 
                            <>
                            <HeadingPrimary Color={skills[2].SkillColor}>{skills[2].SkillTitle}</HeadingPrimary>
                            <ParagraphPrimaryStyled>{skills[2].SkillIntro}</ParagraphPrimaryStyled>
                            </>
                        }
                        
                    </HeaderTextContent>
                    
                </HeaderTopWrapperGrid>
        
        </HeaderWrapper>

    </>

};


export default SkillPageHeaderTemplate;