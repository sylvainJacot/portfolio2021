import { FC } from "react";
import styled from "styled-components";
import Parallax from "react-rellax";
import { transitions } from "../../01-atoms/animations/transitions";
import { colorsRoles } from "../../01-atoms/colors";
import media from "../../01-atoms/mediaqueries/MediaQueries";
import HeadingSecondary from "../../01-atoms/typography/headings/HeadingSecondary";
import ParagraphPrimary from "../../01-atoms/typography/paragraphs/ParagraphPrimary";
import CallToAction from "../../02-molecules/CallToAction/CallToAction";
import ResponsiveImage from "../../02-molecules/images/ResponsiveImage";
import HeadingProject from "../../01-atoms/typography/headings/HeadingProject";

type IRightSide = {
    bgColor: string;
};

export const Box = styled.section`
  position: relative;
  width: 100%;
  height: 640px;
  display: flex;
  flex-direction: column-reverse;
  content-visibility: auto;

  ${media.md} {
    height: 880px;
    flex-direction: row;
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
background-color: ${colorsRoles.DarkGrey2};
  ${media.md} {
    width: 50%;
  }

  ${LeftContent} {
    width: 80%;
    height: fit-content;
    text-align: center;
    ${media.md} {
      text-align: left;
      width: 360px;
    }
    ${media.lg} {
      width: 480px;
    }
  }
`;
export const ForeGroundPic = styled.div``;
export const BackGroundPic = styled.div``;
export const RightSide = styled.div<IRightSide>`
width: 100%;
height: 200px;
position: relative;
background-color: ${(props) => props.bgColor};
transition: ${transitions.easeOut3ms};
-webkit-animation: ${transitions.easeOut3ms};
-moz-animation: ${transitions.easeOut3ms};
-o-animation: ${transitions.easeOut3ms};

${media.sm}{
height: 400px;
}

${media.md}{
width: 50%;
height: 100%;
}

& ${BackGroundPic} {
position: absolute;
top: 80%;
right: 50%;
transform: translate(50%,50%);

${media.xs}{
top: 64%;
right: 50%;
}

${media.sm}{
top:40%;
right: 50%;
}

${media.md}{
top: 55%;
right: 64%;
transform: translate(50%,-50%);
}

& img {
width: 240px;

${media.xs}{
width: 320px;
}

${media.sm}{
width: 400px;
}
${media.md}{
width: 640px;
}

${media.lg}{
width: 700px;
}

}


}
& ${ForeGroundPic} {
    position: absolute;
    left: 0;
    top: 280%;
    transform: translate(50%,-50%);
    
    ${media.xs}{
    left: -10%;
    top: 280%;
    }
    
     ${media.sm}{
    left: 0;
    top: 200%;
    }
    
    ${media.md}{
     left: -40%;
     top: 80%;
    }
    
    & img {
    width: 80px;
    
    ${media.xs}{
    width:140px
    }
    
    ${media.sm}{
    width:160px
    }
    ${media.md}{
    width:240px
    }
    }

    }
}



`;

type ISkillPageProjectUxUiItem = {
    fields: any;
    title: string;
    description: string;
    slug: string;
    bgColor: string;
    backgroundpicture: string;
    foregroundpicture: string;
};

const SkillPageProjectUxUiItem: FC<ISkillPageProjectUxUiItem> = (props) => {
    return (
        <>
            <Box>
                <LeftSide>
                    <LeftContent>
                        <ParagraphPrimary>{props.fields}</ParagraphPrimary>
                        <HeadingProject Positive={false}>
                            {props.title}
                        </HeadingProject>
                        <ParagraphPrimary>{props.description}</ParagraphPrimary>
                        <CallToAction
                            background={"white"}
                            to={props.slug}
                            label={"See more"}
                            LightText={true}
                        />
                    </LeftContent>
                </LeftSide>

                <RightSide bgColor={props.bgColor}>
                    <BackGroundPic>
                        <Parallax speed={2} percentage={0}>
                            <ResponsiveImage srcMobile={props.backgroundpicture} />
                        </Parallax>
                    </BackGroundPic>

                    <ForeGroundPic>
                        <Parallax speed={8} percentage={0}>
                            <ResponsiveImage srcMobile={props.foregroundpicture} />
                        </Parallax>
                    </ForeGroundPic>
                </RightSide>
            </Box>
        </>
    );
};

export default SkillPageProjectUxUiItem;
