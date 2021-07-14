import styled from "styled-components";
import SkillPageHeaderTemplate from "../../03-organisms/skillpageheader/SkillPageHeaderTemplate";

export const PageWrapper = styled.main`
    width: calc(100% - 80px);
    background-color: red;
`

const FrontenDeveloper = () => {
    return <>
        <PageWrapper>
            <SkillPageHeaderTemplate isDEV />
        </PageWrapper>
    </>

};


export default FrontenDeveloper;