import styled from "styled-components";
import { colorsRoles } from "../../colors";
import { fontsFamilies } from "../../GlobalStyle";

export const ParagraphTopTitleStyle = styled.p`
  font-family: ${fontsFamilies.poppinsLight};
  color: ${colorsRoles.White};
  font-size: 1rem;
`;

const ParagraphTopTitle = (props) => {
  return (
    <>
      <ParagraphTopTitleStyle>{props.children}</ParagraphTopTitleStyle>
    </>
  );
};

export default ParagraphTopTitle;
