import { FC } from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import { colorsRoles } from "../../01-atoms/colors";

type IClientIcon = {
    src : string
}

export const StyledReactSVG = styled(ReactSVG) `
    div {
        width: 5rem;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        svg {
            min-width: 100%;
            object-fit: contain;    
        }
    }
`;

// export const IconContainer = styled.div`
//     width: 10rem;
//     height: 10rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
// `;

const ClientIcon:FC<IClientIcon> = (props) => {
    return <>

        <StyledReactSVG src={props.src} />
    </>

};


export default ClientIcon;