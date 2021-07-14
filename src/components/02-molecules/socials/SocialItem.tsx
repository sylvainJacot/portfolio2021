

import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { animations } from "../../01-atoms/animations/transitions";


type Iprops = {
  children : any,
  to : string
}

export const SocialItemWrapper = styled.li`
display: flex;
justify-content: center;
  &:not(:last-child) {
    margin-bottom: 1.5rem;
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

const SocialItem : FC<Iprops>= ({children, to}) => {
  return (
    <>
      <SocialItemWrapper>
            <Link to={to} target="_blank">
                {children}
            </Link>
      </SocialItemWrapper>
    </>
  );
};

export default SocialItem;
