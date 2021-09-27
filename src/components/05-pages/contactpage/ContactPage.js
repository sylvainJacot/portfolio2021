import { useContext } from "react";
import styled, { css, keyframes } from "styled-components";
import { transitions } from "../../01-atoms/animations/transitions";
import { colorsRoles } from "../../01-atoms/colors";
import icons from "../../01-atoms/icons/icons";
import { colSizes, gridSideMargins } from "../../01-atoms/layout/Grid";
import media from "../../01-atoms/mediaqueries/MediaQueries";
import CallToActionSecondary, { CallToActionSecondaryStyle } from "../../02-molecules/CallToAction/CallToActionSecondary";
import MailTo, { MailToStyleWrapper } from "../../02-molecules/CallToAction/MailTo";
import { GlobalContext } from "../../data/contexts/global/GlobalProvider";
import HelloContacTitle from "./HelloContacTitle";
import { ParagraphStyle } from "../../01-atoms/typography/paragraphs/ParagraphPrimary";

const contactPageLaptop = keyframes`
  0% {
    transform: scaleX(1)
  }
  80% {
    transform: scaleX(1.1)
  }
  100% {
    transform: scaleX(1)
  }
`;

const contactPageLaptopAnimation = () =>
  css`
    ${contactPageLaptop} 600ms ease-in-out;
  `;
  export const ParagraphPrimaryStyled = styled(ParagraphStyle)`
  
  `;

export const ContactPageCloseArea = styled.div`
  position: fixed;
  display: block;
  background-color: ${colorsRoles.DarkGrey2};
  opacity: ${(props) => (props.aboutPageHidden ? "0" : ".5")};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 11;
  transition: ${transitions.easeOut2ms};
  pointer-events: ${(props) => (props.aboutPageHidden ? "none" : "inherit")};
  cursor: ${(props) => (props.aboutPageHidden ? "none" : "pointer")};
`;

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
    align-items: center;
  z-index: 12;
  right: 0px;
  top: ${(props) => props.aboutPageHidden ? "0" : "80px"};
  background-color: ${colorsRoles.White};
  width: 100vw;
  height: 100vh;
  transform: ${(props) =>
    props.aboutPageHidden ? "translateY(-100vh)" : "translateY(0)"};
  transition: ${transitions.easeOut3ms};
  padding: 1rem ${gridSideMargins.xs};

  ${media.sm} {
    padding: 1rem ${gridSideMargins.sm};
  }

  ${media.md} {
    position: fixed;
    width: ${(props) => (props.aboutPageHidden ? "0" : "50%")};
    /* box-shadow:  20px 0px 50px 20px ${colorsRoles.DarkGrey}; */
    height: 100vh;
    top: unset;
    transform: unset;
    right: 5.5rem;
    transform-origin: right center;
    animation: ${(props) =>
      props.aboutPageHidden
        ? contactPageLaptopAnimation
        : contactPageLaptopAnimation};
    padding: ${(props) =>
      props.aboutPageHidden ? "0" : `1rem calc(2 * ${colSizes.md})`};
  }
  ${media.lg} {
    padding: ${(props) =>
      props.aboutPageHidden ? "0" : `1rem calc(2 * ${colSizes.lg})`};
  }
`;

export const ContactContent = styled.div`
  opacity: ${(props) => (props.aboutPageHidden ? 0 : 1)};
  transform: ${(props) => (props.aboutPageHidden ? "translateY(32px) scale(1)" : "translateY(0px) scale(1)" )};
  transform-origin: bottom center;
  transition: ${(props) => (props.aboutPageHidden ? "all 0s ease-out" : "all 0.2s ease-out 0.3s" )};
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.md} {
    align-items: flex-start;
  }

  ${ParagraphPrimaryStyled} {
    margin-bottom: 1rem;
    &:first-of-type{
      margin-top:2rem;
    }
    &:last-of-type{
      margin-bottom:2rem;
    }
  }

  ${CallToActionSecondaryStyle} {
    /* margin-bottom: 2rem; */
  }

  ${MailToStyleWrapper} {
    margin-bottom: 2rem;
  }

`;

const ContactPage = () => {
  const email = "jct.sylvain@gmail.com";
  const subject = "Hello Sylvain!";
  const body = "Hello Sylvain, nice to meet you!";

  const { aboutPageHidden, setAboutPageHidden } = useContext(GlobalContext);

  const handleCloseArea = () => {
    setAboutPageHidden(!aboutPageHidden);
  };

  return (
    <>
      <Wrapper aboutPageHidden={aboutPageHidden}>
        <ContactContent aboutPageHidden={aboutPageHidden}>

          <HelloContacTitle />

          <ParagraphPrimaryStyled lightBg={true}>
            I’m Sylvain, UX/UI Designer, creative developer and photo retoucher.
            Nice to meet you ! <br/>I’m the guy who makes sure your product is set
            apart from the competition by creating engaging user interfaces and
            bringing products to life.
          </ParagraphPrimaryStyled>

          <ParagraphPrimaryStyled lightBg={true}>
            My preference is developing with React
            and styled component for interactive websites. Learning is what
            really drives me, that’s why I love to share & learn from my
            teammates.
          </ParagraphPrimaryStyled>

          <ParagraphPrimaryStyled lightBg={true}>
            Do you need some help for a project? Send
            me over an email, and let's chat.
          </ParagraphPrimaryStyled>

          <MailTo
            email={email}
            background={colorsRoles.White}
            subject={subject}
            body={body}
            label={"Drop me an email"}
            src={icons.Email}
          />

          <CallToActionSecondary
            to={"/"}
            background={colorsRoles.White}
            LightText={false}
            label={"My resume"}
            src={icons.Resume}
          />

        </ContactContent>
      </Wrapper>
      <ContactPageCloseArea
        onClick={handleCloseArea}
        aboutPageHidden={aboutPageHidden}
      ></ContactPageCloseArea>
    </>
  );
};

export default ContactPage;
