import { FC } from "react";
import styled from "styled-components";
import { colorsRoles } from "../../colors";
import { fontsFamilies } from "../../GlobalStyle";
import { media } from "../../mediaqueries/MediaQueries";


type IParagraphStyle = {
    marginM? : string;
    marginT? : string;
    marginL? : string;
    marginD? : string;
    lightBg? : boolean;
}

export const ParagraphStyle = styled.p<IParagraphStyle>`
    font-family: ${fontsFamilies.poppinsRegular};
    color: ${(props) => props.lightBg? colorsRoles.DarkGrey : colorsRoles.White};
    font-size: 1rem;
    margin: ${(props) => props.marginM };
    ${media.sm} {
        margin: ${(props) => props.marginT }; 
    }
    ${media.md} {
        margin: ${(props) => props.marginL }; 
    }
    ${media.lg} {
        margin: ${(props) => props.marginD }; 
    }
`;


type IParagraphPrimary = {
    marginM? : string;
    marginT? : string;
    marginL? : string;
    marginD? : string;
    lightBg? : boolean;
}

const ParagraphPrimary:FC <IParagraphPrimary>= ({marginM,marginT,marginL,marginD,lightBg, ...props}) => {
    return <>
        <ParagraphStyle marginM={marginM} marginT={marginT} marginL={marginL} marginD={marginD} lightBg={lightBg}>{props.children}</ParagraphStyle>
    </>

};

export default ParagraphPrimary;



