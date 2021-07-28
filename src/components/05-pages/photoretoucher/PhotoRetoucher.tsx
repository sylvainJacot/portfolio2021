import SkillPageClients from "../../03-organisms/skillpage/SkillPageClients";
import SkillPageHeaderTemplate from "../../03-organisms/skillpage/SkillPageHeaderTemplate";
import SkillPageMethodology from "../../03-organisms/skillpage/SkillPageMethodology";

const PhotoRetoucher = () => {
    return <>
        <SkillPageHeaderTemplate isPHOTO />
        <SkillPageClients isPHOTO />
        <SkillPageMethodology isPHOTO />
    </>

};


export default PhotoRetoucher;