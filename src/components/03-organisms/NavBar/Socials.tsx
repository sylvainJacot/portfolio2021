
import { useState } from "react";
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
      fill: ${colorsRoles.White_50};
    }
  }
`;

const Socials = () => {

  const [hoverAnime, setHoverAnime] = useState(false);

  const handleStartHoverAnime = () => {
    setHoverAnime(true);
  }
  // const handleFinishtHoverAnime = () => {
  //   setHoverAnime(false);
  // }

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
                  src={social.SocialIcon} />
                </SocialItem>
                )
              }
      </SocialsWrapper>
    </>
  );
};

export default Socials;
