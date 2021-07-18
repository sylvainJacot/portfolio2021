import { FC } from "react";
import styled from "styled-components";
import { colorsRoles } from "../../colors";
import { fontsFamilies } from "../../GlobalStyle";


export const Paragraph = styled.p`
    font-family: ${fontsFamilies.poppinsRegular};
    color: ${colorsRoles.White};
    font-size: 1rem;
`;


const ParagraphPrimary:FC = (props) => {
    return <>
        <Paragraph>{props.children}</Paragraph>
    </>

};

export default ParagraphPrimary;



