import { FC, useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colorsRoles } from "../../01-atoms/colors";
import { fontsFamilies } from "../../01-atoms/GlobalStyle";
import { media } from "../../01-atoms/mediaqueries/MediaQueries";


type IProps = {
  background: string;
  LightText: boolean;
};

export const Wrapper = styled(NavLink)<IProps>`
  position: relative;
  display: inline-block;
  padding: 1rem 1rem;
  background-color: ${(props) => props.background};
  border-radius: 0.5rem;
  color: ${(props) =>
  props.LightText ? colorsRoles.White : colorsRoles.DarkGrey};
  width: fit-content;
  overflow: hidden;
  font-family: ${fontsFamilies.poppinsSemiBold};
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  z-index: 1;

    ${media.sm`
      font-size: 1rem;
      padding: 1rem 1.5rem;
    `}

  `

export const Circle = styled.div`
  display: block;
  position: absolute;
  transform: scale(1);
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  left: 0;
  top: 0;
  animation: ripple 600ms ease-out;
  @keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

`;

type CallToActionProps = {
  label: string;
  to: string;
  background: string;
  LightText: boolean;
//   onClick : ()=>void;
};

const CallToAction: FC<CallToActionProps> = ({
  label,
  to,
  background,
  LightText,
}) => {
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);

    // MouseEvent
    const createRipple = (event: any) => {
        if(circleRef.current) {
            event.preventDefault();
            const buttonTarget = event.currentTarget;
            const buttonHeight = buttonTarget.clientHeight;
            const buttonWidth = buttonTarget.clientWidth;
            const diameter = Math.max(buttonWidth, buttonHeight);
            const radius = diameter / 2;  
            circleRef.current.style.height = `${diameter}px`;
            circleRef.current.style.left = `${event.clientX - buttonTarget.offsetLeft - radius}px`;
            circleRef.current.style.top = `${event.clientY - buttonTarget.offsetTop - radius}px`;
            console.log(buttonHeight, buttonWidth)
        }
    }

  return (
    <>
      <Wrapper ref={buttonRef} onClick={createRipple} to={to} background={background} LightText={LightText}>
        {label}
        {/* <Circle ref={circleRef}/> */}
      </Wrapper>
    </>
  );
};

export default CallToAction;
