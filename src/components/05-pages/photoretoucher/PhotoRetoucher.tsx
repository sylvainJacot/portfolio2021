import styled from "styled-components";
import SkillPageHeaderTemplate from "../../03-organisms/skillpage/SkillPageHeaderTemplate";

export const PageWrapper = styled.main`
    width: calc(100% - 80px);
`

const PhotoRetoucher = () => {
    return <>
        <PageWrapper>
            <SkillPageHeaderTemplate isPHOTO />
        </PageWrapper>
    </>

};


export default PhotoRetoucher;