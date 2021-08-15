import styled from "styled-components";
import { transitions } from "../../animations/transitions";
import { colorsRoles } from "../../colors";
import { fontsFamilies } from "../../GlobalStyle";

export const Heading = styled.h1`
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
`;

const HeadingPrimary = ({ Color, ...props }) => {
  return (
    <>
      <Heading Color={Color}>{props.children}</Heading>
    </>
  );
};

export default HeadingPrimary;
