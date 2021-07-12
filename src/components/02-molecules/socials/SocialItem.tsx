

import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


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
      animation: bounceIn 0.6s ease-out forwards;
     }
  }
  @keyframes bounceIn{
  0%{
    opacity: 0.5;
    transform: scale(0.8) translate3d(0,0,0);
  }
  50%{
    opacity: 0.9;
    transform: scale(1.1);
  }
  80%{
    opacity: 1;
    transform: scale(0.89);
  }
  100%{
    opacity: 1;
    transform: scale(1) translate3d(0,0,0);
  }
}
  }
`;

const SocialItem : FC<Iprops>= ({children, to}) => {
  return (
    <>
      <SocialItemWrapper>
            <Link to={to}>
                {children}
            </Link>
      </SocialItemWrapper>
    </>
  );
};

export default SocialItem;
