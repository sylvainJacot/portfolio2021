import styled from "styled-components";
import SkillPageHeaderTemplate from "../../03-organisms/skillpageheader/SkillPageHeaderTemplate"

export const PageWrapper = styled.main`
    width: calc(100% - 80px);
    background-color: red;
`

const UxUiDesigner = () => {
    return <>

        <PageWrapper>
            <SkillPageHeaderTemplate isUXUI />
        </PageWrapper>

    </>

};


export default UxUiDesigner;