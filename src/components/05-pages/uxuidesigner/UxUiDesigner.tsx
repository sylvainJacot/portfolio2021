import SkillPageClients from "../../03-organisms/skillpage/SkillPageClients";
import SkillPageHeaderTemplate from "../../03-organisms/skillpage/SkillPageHeaderTemplate"
import SkillPageMethodology from "../../03-organisms/skillpage/SkillPageMethodology";
import SkillPageProjectsUxUi from "../../03-organisms/skillpage/SkillPageProjectsUxUi";


const UxUiDesigner = () => {
    return <>

            <SkillPageHeaderTemplate isUXUI />
            <SkillPageClients isUXUI />
            <SkillPageMethodology isUXUI />
            <SkillPageProjectsUxUi />
    </>

};


export default UxUiDesigner;