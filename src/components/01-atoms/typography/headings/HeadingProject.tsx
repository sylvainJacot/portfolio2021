import { FC } from "react";
import styled from "styled-components";
import { colorsRoles } from "../../colors";
import { fontsFamilies } from "../../GlobalStyle";

type IHeadingProjectStyle = {
  Positive: boolean;
}

export const HeadingProjectStyle = styled.h3<IHeadingProjectStyle>`
    position: relative;
    font-family: ${fontsFamilies.poppinsBold};
    color: ${(props) => props.Positive ? colorsRoles.DarkGrey : colorsRoles.White};
    font-size: 1.5rem;
    line-height: 1.5rem;
    text-align: left;
`;


type IHeadingProject = {
    Positive: boolean;
}

const HeadingProject:FC <IHeadingProject>= ({Positive, ...props}) => {
    return <>
        <HeadingProjectStyle Positive={Positive}>{props.children}</HeadingProjectStyle>
    </>

};

export default HeadingProject;



