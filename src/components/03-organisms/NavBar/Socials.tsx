import { FC } from "react";
import styled from "styled-components";
import { IcGitHub, icons } from "../../01-atoms/icons/icons";
import SocialItem from "../../02-molecules/socials/SocialItem";


export const SocialsWrapper = styled.ul`

`;

const Socials = () => {
  return (
    <>
      <SocialsWrapper>
            <SocialItem>
                <IcGitHub/>
            </SocialItem>
            <SocialItem>
                <IcGitHub/>
            </SocialItem>
            <SocialItem>
                <IcGitHub/>
            </SocialItem>
      </SocialsWrapper>
    </>
  );
};

export default Socials;
