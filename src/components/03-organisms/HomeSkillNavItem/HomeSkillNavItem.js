
import styled from "styled-components";
import CallToAction from "../../02-molecules/CallToAction/CallToAction";
import { colorsRoles, gradients } from "../../01-atoms/colors";
import { media } from "../../01-atoms/mediaqueries/MediaQueries";
import { transitions } from "../../01-atoms/animations/transitions";
import HeadingPrimary from "../../01-atoms/typography/headings/HeadingPrimary";
import { ParagraphStyle } from "../../01-atoms/typography/paragraphs/ParagraphPrimary";

export const ParagraphPrimaryStyled = styled(ParagraphStyle)`
  margin: 2rem 0 1rem 0;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
  width: 64%;

 ${media.sm} {
  padding-right: 16%;
}

 ${media.md} {
  padding: 0;
    width: 100%;
}

  }

 ${media.md} {
  & > p {
      position: absolute;
      opacity: 0;
      transform-origin: bottom center;
      transform: translateY(1.5rem) scaleY(0.7);
  }
}

  & > a {
 ${media.md} {
  position: absolute;
      opacity: 0;
      transform-origin: bottom center;
      transform: translateY(1.5rem) scaleY(1);
}
  }
`;
export const Picture = styled.img`
  position: absolute;
  width: 20rem;
  left: 3rem;
  bottom: -22rem;
  transform: translate(-50%, -50%);

 ${media.sm} {
  width: 24rem;
    left: 8rem;
    bottom: -26rem;
  }
 ${media.md} {
  width: 27vw;
  left: 50%;
  top: 56vh;
  }
  ${media.lg} {
    width: 26vw;
    max-width: 32rem;
  }

`;

export const Wrapper = styled.li`
  position: relative;
  overflow: hidden;
  width: 100vw;
  padding: 6rem 2rem;
  background-color: ${colorsRoles.DarkGrey};
  display: flex;
  justify-content: flex-end;

  &:not(:first-child) {
    ${Picture} {
      transform: translate(-50%, -50%) scaleX(-1);
    }
  }
  &:after {
    position: absolute;
    display: block;
    content: "";
    left: 0;
    right: 0;
    bottom: 0;
    height: 32%;
    ${(props) => props.gradient}
    opacity: 0.2;
  }
  &:before {
    position: absolute;
    display: block;
    content: "";
    width: 150%;
    left: 50%;
    top: 0;
    height: 100%;
    transform: translate(-50%, -50%);
    ${gradients.RadialBg1}
    opacity: 0.2;
  }

 ${media.sm} {
  padding: 6rem 2rem;
}

 ${media.md} {
  padding: 6rem 4rem;
    ${Picture} {
      transition: ${transitions.easeOut3ms};
    }

    &:not(:first-child) {
    ${Picture} {
      transform: translate(-50%, -50%) scaleX(1);
      }
    }
    &:hover {
      ${Picture} {
        transform: translate(-50%, -8%) scale(1.5) rotate(0deg);
      transition: ${transitions.easeOut4ms};
      }
      &:after {
        height: 100%;
        transition: ${transitions.easeOut3ms};
        opacity: 0.1;
      }
       h1 {
        &:after {
          width: 5rem;
          transition: ${transitions.easeOut4ms};
        }
      }
       p {
        position: relative;
        opacity: 1;
        transform: translateY(0) scaleY(1);
        transition: ${transitions.easeOut3ms};
      }
      a {
        position: relative;
        opacity: 1;
        transform: translateY(0) scaleY(1);
        transition: ${transitions.easeOut3ms};
      }

  }
}
  
`;

const HomeSkillNavItem = ({
  Titre,
  ImgSrc,
  SubTitle,
  Color,
  LightText,
  gradient,
  label,
  pathName
}) => {
  return (
    <>
      <Wrapper gradient={gradient}>
        <ContentWrapper Color={Color}>
          <HeadingPrimary Color={Color}>{Titre}</HeadingPrimary>
          <ParagraphPrimaryStyled>{SubTitle}</ParagraphPrimaryStyled>
          <CallToAction
            label={label}
            to={pathName}
            background={Color}
            LightText={LightText}
          />
        </ContentWrapper>
        <Picture src={ImgSrc} alt={""} />
      </Wrapper>
    </>
  );
};

export default HomeSkillNavItem;
