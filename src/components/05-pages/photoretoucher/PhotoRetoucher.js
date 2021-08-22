import SkillPageWrapper from "../../03-organisms/skillpage/SkillPageWrapper";
import SkillPageHeaderTemplate from "../../03-organisms/skillpage/SkillPageHeaderTemplate";
import SkillPageProjectsPhoto from "../../03-organisms/skillpage/SkillPageProjectsPhoto";
import SkillPageMethodology from "../../03-organisms/skillpage/SkillPageMethodology";

const PhotoRetoucher = () => {
    return <>
        <SkillPageWrapper>
            <SkillPageHeaderTemplate isPHOTO />
            {/* <SkillPageClients isPHOTO /> */}
            {/* <SkillPageMethodology isPHOTO /> */}
            <SkillPageProjectsPhoto />
        </SkillPageWrapper>
    </>

};


export default PhotoRetoucher;