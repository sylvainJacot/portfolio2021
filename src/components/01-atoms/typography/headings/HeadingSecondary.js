import styled from "styled-components";
import { colorsRoles } from "../../colors";
import { fontsFamilies } from "../../GlobalStyle";

export const HeadingSecondaryStyle = styled.h3`
  position: relative;
  font-family: ${fontsFamilies.poppinsBold};
  color: ${(props) =>
    props.Positive ? colorsRoles.DarkGrey : colorsRoles.White};
  font-size: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
`;

const HeadingSecondary = ({ Positive, ...props }) => {
  return (
    <>
      <HeadingSecondaryStyle Positive={Positive}>
        {props.children}
      </HeadingSecondaryStyle>
    </>
  );
};

export default HeadingSecondary;
