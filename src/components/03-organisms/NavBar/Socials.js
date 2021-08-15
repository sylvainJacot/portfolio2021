import { ReactSVG } from "react-svg";
import styled from "styled-components";
import SocialItem from "../../02-molecules/socials/SocialItem";
import { socialData } from "../../data/socials/socials-data";
import { colorsRoles } from "../../01-atoms/colors";


export const SocialsWrapper = styled.ul`
`;

export const StyledReactSVG = styled(ReactSVG) `
  svg {
    width: 1.5rem;
    height: 1.5rem;
    > path {
      fill: ${props => props.darkNavBar ? colorsRoles.White_80 :  colorsRoles.DarkGrey};
    }
  }
`;

const Socials = (props) => {


  return (
    <>
      <SocialsWrapper>
              {
                socialData.map((social,index) => 
                <SocialItem 
                  key={index}
                  to={social.SocialLink}
                >
                  <StyledReactSVG 
                    src={social.SocialIcon} 
                    darkNavBar={props.darkNavBar}
                  />

                </SocialItem>
                )
              }
      </SocialsWrapper>
    </>
  );
};

export default Socials;
