import styled from "styled-components";
import { colorsRoles } from "../../colors";
import { fontsFamilies } from "../../GlobalStyle";
import { media } from "../../mediaqueries/MediaQueries";

export const ParagraphStyle = styled.p`
  font-family: ${fontsFamilies.poppinsRegular};
  color: ${(props) =>
    props.lightBg ? colorsRoles.DarkGrey : colorsRoles.White};
  font-size: 1rem;
  margin: ${(props) => props.marginM};
  ${media.sm} {
    margin: ${(props) => props.marginT};
  }
  ${media.md} {
    margin: ${(props) => props.marginL};
  }
  ${media.lg} {
    margin: ${(props) => props.marginD};
  }
`;

const ParagraphPrimary = ({
  marginM,
  marginT,
  marginL,
  marginD,
  lightBg,
  ...props
}) => {
  return (
    <>
      <ParagraphStyle
        marginM={marginM}
        marginT={marginT}
        marginL={marginL}
        marginD={marginD}
        lightBg={lightBg}
      >
        {props.children}
      </ParagraphStyle>
    </>
  );
};

export default ParagraphPrimary;
