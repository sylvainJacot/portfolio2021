

import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { icons } from "../../01-atoms/icons/icons";


type Iprops = {
  children :  any
}

export const SocialItemWrapper = styled.li`

`;

const SocialItem : FC<Iprops>= ({children}) => {
  return (
    <>
      <SocialItemWrapper>
            <Link to="/">
                {children}
            </Link>
      </SocialItemWrapper>
    </>
  );
};

export default SocialItem;
