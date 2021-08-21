import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { transitions } from "../../01-atoms/animations/transitions";
import { colorsRoles } from "../../01-atoms/colors";
import { fontsFamilies } from "../../01-atoms/GlobalStyle";
import { media } from "../../01-atoms/mediaqueries/MediaQueries";


export const Wrapper = styled(NavLink)`
  position: relative;
  display: inline-block;
  padding: 1.5rem 1rem;
  background-color: ${(props) => props.background};
  border-radius: 0.5rem;
  color: ${(props) =>
  props.LightText ? colorsRoles.White : colorsRoles.DarkGrey};
  width: 100%;
  overflow: hidden;
  font-family: ${fontsFamilies.poppinsSemiBold};
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  z-index: 1;
  text-align: center;

  > span {
    display: inline-block;
    z-index: 2;
    transition: ${transitions.easeOut2ms};
  }

 ${media.sm} {
   width: fit-content;;
  font-size: 1rem;
  padding: 1rem 2rem;
  text-align: left;
  }
  ${media.sm} {
    &:after {
      position: absolute;
      display: block;
      content: "";
      background-color: ${colorsRoles.DarkGrey2};
      width: 110%;
      height: 160px;
      border-radius: 50%;
      top: 240%;
      left: 50%;
      transform: translate(-50%,-50%);
      z-index: -1;
      opacity: 0.1;
    }
    &:hover {
        > span {
          transform: translateY(-0.25rem);
          transition: ${transitions.easeOut2ms};
    
        }
        &:after {
        top:50%;
        transition: ${transitions.easeOut3ms};
        }
    }
  }

  `



const CallToAction = ({
  label,
  to,
  background,
  LightText,
}) => {


  return (
    <>
      <Wrapper to={to} background={background} LightText={LightText}>
        <span>{label}</span>
      </Wrapper>
    </>
  );
};

export default CallToAction;
