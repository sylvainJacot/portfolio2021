import styled from "styled-components";
import { colorsRoles } from "../../01-atoms/colors";

export const Wrapper = styled.button`
    width: 3rem;
    height: 3rem;
    background-color: ${colorsRoles.White_10};
    border-radius: 0.5rem;

`;

const MenuButton = () => {
    return <>
        <Wrapper aria-label="menu">
            Hello
        </Wrapper>
    </>

};

export default MenuButton;

