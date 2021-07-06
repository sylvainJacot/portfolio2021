import { FC } from "react";
import styled from "styled-components";
import CallToAction from "../../02-molecules/CallToAction/CallToAction";

type Props = {
  Titre: string;
  ImgSrc: string;
  SubTitle: string;
  Color: string;
  LightText: boolean;
};

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  margin-left: 400px;
`;

export const Picture = styled.img`
  position: absolute;
  width: 320px;
  left: 48px;
  bottom: -22rem;
  transform: translate(-50%, -50%);
`;

export const Wrapper = styled.li`
  position: relative;
  overflow: hidden;
  width: 100vw;
  padding: 4rem 2rem;

  &:not(:first-child) {
    ${Picture} {
      transform: translate(-50%, -50%) scaleX(-1);
    }
  }
`;

const HomeSkillNavItem: FC<Props> = ({
  Titre,
  ImgSrc,
  SubTitle,
  Color,
  LightText,
}) => {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          {Titre}
          {SubTitle}
          <CallToAction
            label="Call To action"
            href="#"
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
