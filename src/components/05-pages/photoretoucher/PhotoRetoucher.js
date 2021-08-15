import SkillPageWrapper from "../../03-organisms/skillpage/SkillPageWrapper";
import SkillPageClients from "../../03-organisms/skillpage/SkillPageClients";
import SkillPageHeaderTemplate from "../../03-organisms/skillpage/SkillPageHeaderTemplate";
import SkillPageMethodology from "../../03-organisms/skillpage/SkillPageMethodology";
import SkillPageProjectsPhoto from "../../03-organisms/skillpage/SkillPageProjectsPhoto";

const PhotoRetoucher = () => {
    return <>
        <SkillPageWrapper>
            <SkillPageHeaderTemplate isPHOTO />
            <SkillPageClients isPHOTO />
            {/* <SkillPageMethodology isPHOTO /> */}
            <SkillPageProjectsPhoto />
        </SkillPageWrapper>
    </>

};


export default PhotoRetoucher;