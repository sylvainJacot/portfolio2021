import styled from "styled-components";
import { colorsRoles } from "../../01-atoms/colors";
import { media } from "../../01-atoms/mediaqueries/MediaQueries";

export const Wrapper = styled.button`
    width: 3rem;
    height: 3rem;
    background-color: ${colorsRoles.White_10};
    border-radius: 0.5rem;
    ${media.sm`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    `}
    ${media.md`
        position: relative;
        top: unset;
        left: unset;
        transform: translate(0,0);
    `}
`;

const MenuButton = () => {
    return <>
        <Wrapper aria-label="menu">
            Hello
        </Wrapper>
    </>

};

export default MenuButton;

