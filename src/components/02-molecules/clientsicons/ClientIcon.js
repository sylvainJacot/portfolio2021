
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import { colorsRoles } from "../../01-atoms/colors";

export const StyledReactSVG = styled(ReactSVG) `
    div {
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            fill: ${props => props.fill? colorsRoles.DarkGrey : ""};  
            path {
                fill: ${props => props.fill? colorsRoles.DarkGrey : ""};  
            }
        }
    }
`;


const ClientIcon = (props) => {
    return <>

        <StyledReactSVG fill={props.fill} src={props.src} />
    </>

};


export default ClientIcon;