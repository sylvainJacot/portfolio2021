


import styled from "styled-components";
import { animations } from "../../01-atoms/animations/transitions";
import { media } from "../../01-atoms/mediaqueries/MediaQueries";


export const SocialItemWrapper = styled.li`
display: flex;
justify-content: center;
  &:not(:last-child) {
 ${media.md} {
  margin-bottom: 1.5rem;
}
  }
  > a {
    padding: 0 1rem;
    &:hover {
     svg {
      animation: ${animations.bounceIn} 0.6s ease-out forwards;
     }
  }
  }
`;

const SocialItem = ({children, to}) => {
  return (
    <>
      <SocialItemWrapper>
            <a href={to} target="_blank" rel="noreferrer">
                {children}
            </a>
      </SocialItemWrapper>
    </>
  );
};

export default SocialItem;
