import SkillPageClients from "../../03-organisms/skillpage/SkillPageClients";
import SkillPageHeaderTemplate from "../../03-organisms/skillpage/SkillPageHeaderTemplate";
import SkillPageMethodology from "../../03-organisms/skillpage/SkillPageMethodology";
import SkillPageProjectsDev from "../../03-organisms/skillpage/SkillPageProjectsDev";
import SkillPageWrapper from "../../03-organisms/skillpage/SkillPageWrapper";


const FrontenDeveloper = () => {
    return <>
        <SkillPageWrapper>
            <SkillPageHeaderTemplate isDEV />
            <SkillPageClients isDEV />
            <SkillPageMethodology isDEV />
            <SkillPageProjectsDev />
        </SkillPageWrapper>
    </>

};


export default FrontenDeveloper;