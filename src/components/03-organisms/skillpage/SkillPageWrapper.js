import { useContext } from "react";
import styled from "styled-components";
import media from "../../01-atoms/mediaqueries/MediaQueries";
import { GlobalContext } from "../../data/contexts/global/GlobalProvider";

export const SkillPageWrapperStyle = styled.div`
    width: 100%;

    ${media.md} {
        width: calc(100% - ${props => props.navBarSize}px);
    }
`;

const SkillPageWrapper = (props) => {

    const {navBarSize} = useContext(GlobalContext)

    return <>
            <SkillPageWrapperStyle navBarSize={navBarSize}>
                {props.children}
            </SkillPageWrapperStyle>
    </>

};

export default SkillPageWrapper;

