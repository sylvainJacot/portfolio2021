import { FC, useContext } from 'react';
import styled from "styled-components";
import { gradients } from '../../01-atoms/colors';
import { GridWrapper } from '../../01-atoms/layout/Grid';
import { GlobalContext } from '../../data/contexts/global/GlobalProvider';
import Row from '../../01-atoms/layout/Row';
import media from '../../01-atoms/mediaqueries/MediaQueries';
import { skills } from "../../data/skills/skills-data";
import HeadingPrimary from '../../01-atoms/typography/headings/HeadingPrimary';
import { Paragraph } from '../../01-atoms/typography/paragraphs/ParagraphPrimary';


type ISkillProps = {
    isUXUI? : boolean;
    isDEV? : boolean;
    isPHOTO? : boolean;
}

type IHeaderWrapper = {
    navBarSize : number;
}

type IHeaderPicture = {
    picReversed : boolean;
}



export const HeaderPicture = styled.img<IHeaderPicture>`
    width: 100%;
    max-width: 20rem;
    margin: 0 auto;
    ${media.sm} {
        max-width: 23rem;
        transform: ${(props) =>(props.picReversed ? "scalex(-1)" : "")};
    }
    ${media.md} {
        max-width: unset;
    }
`;

export const HeaderPictureWrapper = styled(Row)`
    display: flex;
    ${media.sm} {
        position: absolute;
    }
    ${media.md} {
        position: relative;
        transform: translateY(1rem);
    }
`;

export const ParagraphPrimaryStyled = styled(Paragraph)`
    margin-top: 2rem;
    display: inline-block;
`

export const HeaderTextContent = styled(Row)`
        width: 100%;
`;



export const HeaderWrapper = styled(GridWrapper)<IHeaderWrapper>`
    border-bottom-left-radius: 50% 8%;
    border-bottom-right-radius: 50% 8%;
    ${gradients.DarkGreyLeftToRight};
    padding-bottom: 4rem;

    ${media.sm} {
    border-bottom-left-radius: 50% 20%;
    border-bottom-right-radius: 50% 20%;
    min-height: 25rem;
    align-items: center;
    padding-bottom: unset;
    }
    ${media.md} {
        width: calc(100% - ${props => props.navBarSize}px - 0.5rem);
        min-height: unset;
        max-height: 23rem;
    }
    ${media.lg} {
        max-height: 31rem;
    }
`;

const SkillPageHeaderTemplate:FC<ISkillProps> = ({isUXUI,isDEV,isPHOTO}) => {

    const { navBarSize }  = useContext(GlobalContext);

    return <>

        <header>
        <HeaderWrapper navBarSize={navBarSize}>

                    <HeaderPictureWrapper
                        StartXs={2}
                        EndXs={11}
                        StartMd={0}
                        EndMd={9}
                        StartLg={0}
                        EndLg={9}
                    >

                    {
                            isUXUI && 
                            <HeaderPicture src={skills[0].SkillHeroImg} alt={skills[0].SkillTitle} picReversed={false}/>
                        }
                                                {
                            isDEV && 
                            <HeaderPicture src={skills[1].SkillHeroImg} alt={skills[1].SkillTitle} picReversed={true}/>
                        }
                                                {
                            isPHOTO && 
                            <HeaderPicture src={skills[2].SkillHeroImg} alt={skills[2].SkillTitle} picReversed={true}/>
                        }


                    </HeaderPictureWrapper>

                    <HeaderTextContent
                    StartXs={2}
                    EndXs={11}
                    StartSm={9}
                    EndSm={18}
                    StartMd={10}
                    EndMd={22}
                    StartLg={10}
                    EndLg={22}
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
                    

        
        </HeaderWrapper>
        </header>
    </>

};


export default SkillPageHeaderTemplate;