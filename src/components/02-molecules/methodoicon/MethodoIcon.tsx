import { FC } from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import { colorsRoles } from "../../01-atoms/colors";

type IMethodoIcon = {
    src : string
}

export const StyledReactSVG = styled(ReactSVG) `
    div {
        width: 5rem;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: green;
        svg {
            min-width: 100%;
            object-fit: contain;    
        }
    }
`;


const MethodoIcon:FC<IMethodoIcon> = (props) => {
    return <>

        <StyledReactSVG src={props.src} />
    </>

};


export default MethodoIcon;