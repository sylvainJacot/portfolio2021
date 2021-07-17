import { FC } from "react";
import styled from "styled-components";
import CallToAction from "../../02-molecules/CallToAction/CallToAction";
import { colorsRoles, gradients } from "../../01-atoms/colors";
import { fontsFamilies } from "../../01-atoms/GlobalStyle";
import { media } from "../../01-atoms/mediaqueries/MediaQueries";
import { transitions } from "../../01-atoms/animations/transitions";

type Props = {
  Titre: string;
  ImgSrc: string;
  SubTitle: string;
  Color: string;
  LightText: boolean;
  gradient: string;
  label: string;
  pathName: string
};

type StyledWrapper = {
  gradient: string;
};
type StyledContent = {
  Color: string;
};

export const ContentWrapper = styled.div<StyledContent>`
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 64%;

 ${media.sm} {
  padding-right: 16%;
}

 ${media.md} {
  padding: 0;
    width: 100%;
}

  & > h1 {
    position: relative;
    font-family: ${fontsFamilies.poppinsBlackBold};
    color: ${colorsRoles.White};
    letter-spacing: 0.1rem;
    font-size: 1.5rem;
    line-height: 1.5rem;

    &:after {
      position: absolute;
      display: block;
      content: "";
      bottom: -1rem;
      height: 0.1rem;
      width: 2.5rem;
      background-color: ${(props) => props.Color};
      transition: ${transitions.easeOut4ms};
    }
  }
  & > p {
    font-family: ${fontsFamilies.poppinsRegular};
    color: ${colorsRoles.White};
    font-size: 1rem;
    margin: 2rem 0;

 ${media.md} {
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
  width: 24rem;
    left: 50%;
    bottom: -24vh;
}

`;

export const Wrapper = styled.li<StyledWrapper>`
  position: relative;
  overflow: hidden;
  width: 100vw;
  padding: 4rem 2rem;
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
      transform: translate(-50%, -8%) scale(1.5) rotate(3deg);
      transition: ${transitions.easeOut4ms};
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

const HomeSkillNavItem: FC<Props> = ({
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
          <h1>{Titre}</h1>
          <p>{SubTitle}</p>
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
