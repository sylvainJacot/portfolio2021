import styled from "styled-components";
import SkillPageHeaderTemplate from "../../03-organisms/skillpage/SkillPageHeaderTemplate"
import SkillPageMain from "../../03-organisms/skillpage/SkillPageMain";

export const PageWrapper = styled.main`
    width: calc(100% - 80px);
`

const UxUiDesigner = () => {
    return <>

        <SkillPageMain>
            <SkillPageHeaderTemplate isUXUI />
        </SkillPageMain>

    </>

};


export default UxUiDesigner;