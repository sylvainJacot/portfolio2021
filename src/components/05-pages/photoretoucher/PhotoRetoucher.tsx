import styled from "styled-components";
import SkillPageHeaderTemplate from "../../03-organisms/skillpageheader/SkillPageHeaderTemplate";

export const PageWrapper = styled.main`
    width: calc(100% - 80px);
    background-color: red;
`

const PhotoRetoucher = () => {
    return <>
        <PageWrapper>
            <SkillPageHeaderTemplate isPHOTO />
        </PageWrapper>
    </>

};


export default PhotoRetoucher;