import SkillPageClients from "../../03-organisms/skillpage/SkillPageClients";
import SkillPageHeaderTemplate from "../../03-organisms/skillpage/SkillPageHeaderTemplate";
import SkillPageMethodology from "../../03-organisms/skillpage/SkillPageMethodology";
import SkillPageProjectsDev from "../../03-organisms/skillpage/SkillPageProjectsDev";


const FrontenDeveloper = () => {
    return <>
            <SkillPageHeaderTemplate isDEV />
            <SkillPageClients isDEV />
            <SkillPageMethodology isDEV />
            <SkillPageProjectsDev />
    </>

};


export default FrontenDeveloper;