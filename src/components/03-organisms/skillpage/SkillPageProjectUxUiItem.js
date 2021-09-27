import styled from "styled-components";
import Parallax from "react-rellax";
import { transitions } from "../../01-atoms/animations/transitions";
import { colorsRoles } from "../../01-atoms/colors";
import media from "../../01-atoms/mediaqueries/MediaQueries";
import ParagraphPrimary from "../../01-atoms/typography/paragraphs/ParagraphPrimary";
import CallToAction from "../../02-molecules/CallToAction/CallToAction";
import ResponsiveImage from "../../02-molecules/images/ResponsiveImage";
import HeadingProject from "../../01-atoms/typography/headings/HeadingProject";
import ParagraphTopTitle from "../../01-atoms/typography/paragraphs/ParagraphTopTitle";


export const Box = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  content-visibility: auto;

  ${media.sm} {
    height: unset;
  }
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
  padding: 5rem 0 5rem 0;

  ${media.sm} {
    padding: 10rem 0 4rem 0;
  }

  ${media.md} {
    padding: 0;
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
      width: 30rem;
    }
  }
`;
export const ForeGroundPic = styled.div``;
export const BackGroundPic = styled.div``;
export const RightSide = styled.div`
width: 100%;
height: 25rem;
position: relative;
background-color: ${(props) => props.bgColor};
transition: ${transitions.easeOut3ms};
-webkit-animation: ${transitions.easeOut3ms};
-moz-animation: ${transitions.easeOut3ms};
-o-animation: ${transitions.easeOut3ms};

${media.sm}{
height: 20rem;
}

${media.md}{
width: 50%;
height: 100%;
}

& ${BackGroundPic} {
position: absolute;
top: 11rem;
right: 50%;
transform: translate(50%,50%);

${media.sm}{
  top: 4rem;
}

${media.md}{
top: 50%;
right: 58%;
transform: translate(50%,-50%);
}
${media.lg}{
  top: 50%;
right: 60%;
}

  & img {
    width: 320px;

    ${media.sm}{
    width: 26rem;
    }

    ${media.md}{
    width: 32rem;
    }

    ${media.lg}{
      width: 46rem;
    }

  }


}
& ${ForeGroundPic} {
    position: absolute;
    left: -24px;
    top: 27rem;
    transform: translate(50%,-50%);
    
    
     ${media.sm}{
    left: 0;
    top: 24rem;
    }
    
    ${media.md}{
     left: -32%;
     top: 34rem;
    }
    ${media.lg}{
      top: 31rem;
    }
    
      & img {
        width: 8rem;
        ${media.xs}{
        width: 8rem;
        }
      
        ${media.sm}{
        width: 10rem;
        }

        ${media.md}{
        width: 9rem;
        }
      }

    }




`;


const SkillPageProjectUxUiItem = ({fields, title, description,slug, ...props}) => {


    return (
        <>
            <Box>
                <LeftSide>
                    <LeftContent>
                        <ParagraphTopTitle>{fields}</ParagraphTopTitle>
                        <HeadingProject textCenterM={true} textCenterL={false} Positive={false}>
                            {title}
                        </HeadingProject>
                        <ParagraphPrimary marginM={"0 0 2rem 0"}>{description}</ParagraphPrimary>
                        <CallToAction
                            background={colorsRoles.White}
                            to={slug} // the exclamation mark here, it's the Non-null assertion operator that  tells TypeScript that even though something looks like it could be null, it can trust you that it's not
                            label={"Take a look"}
                            LightText={false}
                        />
                    </LeftContent>
                </LeftSide>

                <RightSide bgColor={props.bgColor}>  
                    <BackGroundPic>
                        {/* <Parallax speed={1.3} percentage={0}> */}
                            <ResponsiveImage srcMobile={props.backgroundpicture} />
                        {/* </Parallax> */}
                    </BackGroundPic>

                    <ForeGroundPic>
                        {/* <Parallax speed={-0.9} percentage={0}> */}
                            <ResponsiveImage srcMobile={props.foregroundpicture} />
                        {/* </Parallax> */}
                    </ForeGroundPic>
                </RightSide>
            </Box>
        </>
    );
};

export default SkillPageProjectUxUiItem;

