
import { ReactSVG } from "react-svg";
import styled from "styled-components";


export const StyledReactSVG = styled(ReactSVG) `
    div {
        width: 5rem;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            min-width: 100%;
            object-fit: contain;    
        }
    }
`;


const MethodoIcon = (props) => {
    return <>

        <StyledReactSVG src={props.src} />
    </>

};


export default MethodoIcon;