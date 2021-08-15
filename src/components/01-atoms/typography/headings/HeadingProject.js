import styled from "styled-components";
import { colorsRoles } from "../../colors";
import { fontsFamilies } from "../../GlobalStyle";
import media from "../../mediaqueries/MediaQueries";

export const HeadingProjectStyle = styled.h3`
  position: relative;
  font-family: ${fontsFamilies.poppinsSemiBold};
  color: ${(props) =>
    props.Positive ? colorsRoles.DarkGrey : colorsRoles.White};
  font-size: 2rem;
  line-height: 2rem;
  margin: 1rem 0;
  text-align: ${(props) => (props.textCenterM ? "center" : "left")};

  &::first-letter {
    font-family: ${fontsFamilies.poppinsSemiBoldItalic};
  }
  ${media.sm} {
    margin: 1.5rem 0;
    font-size: 3rem;
    line-height: 3rem;
  }

  ${media.md} {
    text-align: ${(props) => (props.textCenterL ? "center" : "left")};
  }
`;

const HeadingProject = ({ Positive, textCenterL, textCenterM, ...props }) => {
  return (
    <>
      <HeadingProjectStyle
        Positive={Positive}
        textCenterM={textCenterM}
        textCenterL={textCenterL}
      >
        {props.children}
      </HeadingProjectStyle>
    </>
  );
};

export default HeadingProject;
