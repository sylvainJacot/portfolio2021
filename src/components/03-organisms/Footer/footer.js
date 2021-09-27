import styled from "styled-components";
import { colorsRoles } from "../../01-atoms/colors";
import media from "../../01-atoms/mediaqueries/MediaQueries";

export const Footerstyled = styled.footer`
    width: 100%;
    height: 10rem;
    background-color: ${colorsRoles.DarkGrey2};

    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    ${media.sm} {
      display: none;
    }
`;




const Footer = () => {

  return (
    <>
      <Footerstyled>
            <p>End of scrolling</p>
      </Footerstyled>
    </>
  );
};

export default Footer;
