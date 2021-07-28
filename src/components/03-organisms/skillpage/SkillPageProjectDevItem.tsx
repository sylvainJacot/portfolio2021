
import { FC, ReactNode } from "react";
import styled from "styled-components";
import { transitions } from "../../01-atoms/animations/transitions";
import { colorsRoles } from "../../01-atoms/colors";
import media from "../../01-atoms/mediaqueries/MediaQueries";
import HeadingSecondary from "../../01-atoms/typography/headings/HeadingSecondary";
import ParagraphPrimary from "../../01-atoms/typography/paragraphs/ParagraphPrimary";
import CallToAction from "../../02-molecules/CallToAction/CallToAction";
import ResponsiveImage from "../../02-molecules/images/ResponsiveImage";



export const Box = styled.div`
position: relative;
width: 100%;
height: 800px;
display: flex;
flex-direction: column-reverse;
padding-bottom: 40px;
align-items: center;
    ${media.md}{
        height: 500px;
        flex-direction: row;
        align-items: unset;
    }
`;

export const LeftContent = styled.div`
height: 100%;
`;
export const LeftSide = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
    ${media.md}{
    width: 50%;
    margin-top: 0px;
    }

    ${LeftContent} {
    width: 80%;
    height: fit-content;
    text-align: center;
    ${media.md}{
    text-align: left;
    width: 360px;
    }
    ${media.lg}{
    width: 480px;
    }
}

`;

export const RightSide = styled.div`
width: 90%;
display: flex;
justify-content: center;
align-items: center;
z-index: 2;
${media.md}{
width: 50%;
height: 100%;
}

`;


export const ToolsBoxProject = styled.div`
position: absolute;
width: 272px;
height: 72px;
background-color: ${colorsRoles.White};
bottom: -110px;
right: 50%;
transform: translate(50%,-50%);
border-radius: 0px 0px 16px 16px;
z-index: -1;
transition: ${transitions.easeOut3ms};
display: flex;
align-items: center;
justify-content: center;
box-shadow: -1px 11px 25px -5px ${colorsRoles.DarkGrey}20;


${media.md}{
width: 380px;
height: 96px;
bottom: -143px;
}


${media.lg}{
width: 400px;
height: 96px;
bottom: -143px;
}

`;

export const PictureWrapper = styled.div`
position: absolute;
overflow: hidden;
width: 100%;
height: 100%;
z-index: 2;

& img {
width: 100%;
}

`;

export const ProjectPicture = styled.div`
position: relative;
width: 320px;
height: 195px;
background-color: ${colorsRoles.LightGrey};

${media.md}{
width: 400px;
height: 242px;
}


${media.lg}{
width: 500px;
height: 304px;
}

&:after, &:before{
content: "";
position: absolute;
top: 3px;
width: 50%;
height: 100%;
background: linear-gradient(to bottom, transparent, ${colorsRoles.DarkGrey});
filter: blur(3px);
opacity: .4;
transition: ${transitions.easeOut3ms};
}

:before {
left: 0;
transform: skewY(-2deg);
}
:after {
right: 0;
transform: skewY(2deg);
}

${media.md}{

 ${ToolsBoxProject} {
 bottom: 0px;
 }

&:hover {
    ${ToolsBoxProject} {
    bottom: -143px;
    transition: ${transitions.easeIn3ms};
    } 
}
}


`;


export const ToolItem = styled.img`
width: 32px;
height: 32px;
margin-left: 16px;

${media.md}{
width: 40px;
height: 40px;
margin-left: 24px;
}

`;


type ISkillPageProjectDevItem = {
    // fields: ReactNode;
    title: string;
    description: string;
    slug: string;
    imgsrc: string;
    breakPoint?: number;
}

const SkillPageProjectDevItem:FC <ISkillPageProjectDevItem>= (props) => {

    // const Tools = props.Tools;

    return <>
        <Box>
            <LeftSide>
                <LeftContent>
                        {/* <ParagraphPrimary>{props.fields}</ParagraphPrimary> */}
                        <HeadingSecondary Positive={true}>
                            {props.title}
                        </HeadingSecondary>
                        <ParagraphPrimary>{props.description}</ParagraphPrimary>
                        <CallToAction
                            background={"white"}
                            to={props.slug}
                            label={"See more"}
                            LightText={true}
                        />
                </LeftContent>
            </LeftSide>
            <RightSide>

                    <ProjectPicture>
                        <PictureWrapper>
                            <ResponsiveImage
                                srcMobile={props.imgsrc}
                                srcDesktop={props.imgsrc}
                                breakPoint={768}
                                altImage={"Test"}
                            />
                        </PictureWrapper>
                        <ToolsBoxProject>
                            <p>built with</p>

                            {/* {
                                Tools && Tools.map((item,index) => (
                                    <>
                                    <ToolItem
                                        key={index}
                                        src={item.logo}
                                        alt={item.altImage}
                                    ></ToolItem>
                                    </>


                                ))
                            } */}

                        </ToolsBoxProject>
                    </ProjectPicture>

            </RightSide>
        </Box>
    </>

};

export default SkillPageProjectDevItem;


