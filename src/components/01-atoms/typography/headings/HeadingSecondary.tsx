import { FC } from "react";
import styled from "styled-components";
import { colorsRoles } from "../../colors";
import { fontsFamilies } from "../../GlobalStyle";

type IHeadingSecondaryStyle = {
  Positive: boolean;
}

export const HeadingSecondaryStyle = styled.h2<IHeadingSecondaryStyle>`
    position: relative;
    font-family: ${fontsFamilies.poppinsBold};
    color: ${(props) => props.Positive ? colorsRoles.DarkGrey : colorsRoles.White};
    font-size: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
`;


type IHeadingSecondary = {
    Positive: boolean;
}

const HeadingSecondary:FC <IHeadingSecondary>= ({Positive, ...props}) => {
    return <>
        <HeadingSecondaryStyle Positive={Positive}>{props.children}</HeadingSecondaryStyle>
    </>

};

export default HeadingSecondary;



