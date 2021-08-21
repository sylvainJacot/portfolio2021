import { ReactSVG } from "react-svg";
import styled from "styled-components";
import { transitions } from "../../01-atoms/animations/transitions";
import { colorsRoles } from "../../01-atoms/colors";
import { fontsFamilies } from "../../01-atoms/GlobalStyle";
import { media } from "../../01-atoms/mediaqueries/MediaQueries";

export const StyledReactSVG = styled(ReactSVG)`
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;

    > div {
        width: 100%;
        height: 100%;
    }

    ${media.md} {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    left: 1.5rem;
    transition: ${transitions.easeOut2ms}
    }

     svg {
        width: 100%;
        height: 100%;
        transform: translateY(-2px);
     }
`

export const CallToActionSecondaryStyle = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  background-color: ${(props) => props.background};
  border-radius: 0.5rem;
  color: ${(props) => props.LightText ? colorsRoles.White : colorsRoles.DarkGrey};
  width: 100%;
  overflow: hidden;
  font-family: ${fontsFamilies.poppinsSemiBold};
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  z-index: 1;
  text-align: left;
  /* border: 1px solid ${colorsRoles.LightGrey}; */

 ${media.sm} {
   width: fit-content;;
  font-size: 1rem;
  padding: 1rem 2rem 1rem 1.5rem;
  text-align: left;
  justify-content: flex-start;
  transition: ${transitions.easeOut2ms};
  transition-delay: 0.1s;

  &:hover {
      color: ${colorsRoles.White};

      ${StyledReactSVG} {
            left: 50%;
            transform: translateY(-50%) translateX(-50%) scale(1.3) rotate(-5deg);
            transition: ${transitions.easeOut2ms};
            transition-delay: 0.2s;
      }
  }
  ${media.md} {
    padding: 1rem 2rem 1rem 4rem;
  }
}

  `




const CallToActionSecondary = ({
  label,
  to,
  background,
  LightText,
  src,
  href
}) => {

  return (
    <>
      <CallToActionSecondaryStyle to={to} background={background} LightText={LightText}>
      <StyledReactSVG src={src} />
        {label}
      </CallToActionSecondaryStyle>
    </>
  );
};

export default CallToActionSecondary;
