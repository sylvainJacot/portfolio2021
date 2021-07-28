import { FC } from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import { colorsRoles } from "../../01-atoms/colors";
import { colSizes } from "../../01-atoms/layout/Grid";

type IClientIcon = {
    src : string
}

export const StyledReactSVG = styled(ReactSVG) `
    div {
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            width: 100%;
            height: 100%;
            object-fit: contain;
            fill: ${colorsRoles.DarkGrey};  
            path {
                fill: ${colorsRoles.DarkGrey}; 
            }
        }
    }
`;


const ClientIcon:FC<IClientIcon> = (props) => {
    return <>

        <StyledReactSVG src={props.src} />
    </>

};


export default ClientIcon;