import styled from "styled-components";
import { transitions } from "../../01-atoms/animations/transitions";
import { colorsRoles } from "../../01-atoms/colors";
import media from "../../01-atoms/mediaqueries/MediaQueries";
import {HeadingProjectStyle} from "../../01-atoms/typography/headings/HeadingProject";
import ParagraphPrimary, {
  ParagraphStyle,
} from "../../01-atoms/typography/paragraphs/ParagraphPrimary";
import CallToAction from "../../02-molecules/CallToAction/CallToAction";
import ResponsiveImage from "../../02-molecules/images/ResponsiveImage";
import { Link } from "react-router-dom";
import { fontsFamilies } from "../../01-atoms/GlobalStyle";
import { gridSideMargins } from "../../01-atoms/layout/Grid";

export const Box = styled.div`
  position: relative;
  width: 100%;
  padding: 5rem ${gridSideMargins.xs};
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  background-color: ${(props) => props.mainColor}10;

  ${media.sm} {
    padding: 5rem ${gridSideMargins.sm};
  }

  ${media.md} {
    flex-direction: row;
    align-items: flex-start;
    padding: 7rem ${gridSideMargins.md};
  }

  ${media.lg} {
    padding: 9rem ${gridSideMargins.lg};
  }
  
`;

export const LeftContent = styled.div`
  height: 100%;

  ${ParagraphStyle} {
    margin-bottom: 2rem;
    &:first-child {
    margin-bottom: 0px;
     }

    ${media.sm} {
      margin-bottom: 3rem;
    }
  }
`;

export const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.md} {
    width: 50%;
    margin-top: 0px;
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

export const RightSide = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  ${media.md} {
    width: 50%;
    height: 100%;
  }
`;

export const ToolsBoxProject = styled.div`
  position: absolute;
  width: 100%;
  height: 72px;
  background-color: ${colorsRoles.DarkGrey}10;
  bottom: -110px;
  right: 50%;
  transform: translate(50%, -50%);
  border-radius: 0px 0px 16px 16px;
  z-index: -1;
  transition: ${transitions.easeOut3ms};
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${media.sm} {
    width: 17rem;
  }
  

  ${media.md} {
    width: 380px;
    height: 96px;
    bottom: -143px;
    box-shadow: -1px 8px 8px -5px ${colorsRoles.DarkGrey}10;
    background-color: ${colorsRoles.White};
  }

  ${media.lg} {
    width: 400px;
    height: 96px;
    bottom: -143px;
  }

  > p {
      font-family: ${fontsFamilies.poppinsSemiBold};
      color: ${colorsRoles.DarkGrey};
      font-size: 0.7rem;
  }

`;

export const PictureWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 2;
  & img {
    height: 100%;
    @media (min-width:410px) {
      width: 100%;
    }
  }
`;

export const ProjectPicture = styled(Link)`
  position: relative;
  width: 20rem;
  height: 12rem;
  background-color: ${colorsRoles.LightGrey};
  margin-bottom: 7rem;

  ${media.sm} {
    width: 30rem;
    height: 18rem;
  }

  ${media.md} {
    margin-bottom: 0rem;
    width: 25rem;
    height: 15rem;
  }

  ${media.lg} {
    width: 500px;
    height: 304px;
  }

  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 3px;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent,
      ${colorsRoles.DarkGrey}
    );
    filter: blur(3px);
    opacity: 0.1;
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

  ${media.md} {
    ${ToolsBoxProject} {
      bottom: 0px;
    }

    &:hover {
      ${ToolsBoxProject} {
        bottom: -143px;
        transition: ${transitions.easeOut3ms};
      }
    }
  }
`;

export const ToolItem = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 16px;

  ${media.md} {
    width: 40px;
    height: 40px;
    margin-left: 24px;
  }
`;

export const ParagraphPrimaryExtended = styled(ParagraphStyle)`
  font-family: ${fontsFamilies.poppinsSemiBold};
  text-transform: uppercase;
  opacity: 0.6;
`;

export const HeadingProjectExtended = styled(HeadingProjectStyle)`
    color: ${(props) => props.mainColor};
    margin: 0.5rem 0 1rem 0;
`;

const SkillPageProjectDevItem = (props) => {
  const Tools = props.Tools;

  return (
    <>
      <Box mainColor={props.mainColor}>
        <LeftSide>
          <LeftContent>
            <ParagraphPrimaryExtended lightBg={true}>{props.fields}</ParagraphPrimaryExtended>
            <HeadingProjectExtended
              textCenterM={true}
              textCenterL={false}
              Positive={true}
              ref={props.TitleRef}
              mainColor={props.mainColor}
            >
              {props.title}
            </HeadingProjectExtended>
            <ParagraphPrimary lightBg={true}>
              {props.description}
            </ParagraphPrimary>
            <CallToAction
              background={props.bgCTA}
              to={props.slug}
              label={"See more"}
              LightText={true}
            />
          </LeftContent>
        </LeftSide>
        <RightSide>
          <ProjectPicture to={props.slug}>
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

              {Tools &&
                Tools.map((item, index) => (
                  <>
                    <ToolItem
                      key={index}
                      src={item.logo}
                      alt={item.altImage}
                    ></ToolItem>
                  </>
                ))}
            </ToolsBoxProject>
          </ProjectPicture>
        </RightSide>
      </Box>
    </>
  );
};

export default SkillPageProjectDevItem;
