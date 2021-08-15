import SkillPageClients from "../../03-organisms/skillpage/SkillPageClients";
import SkillPageHeaderTemplate from "../../03-organisms/skillpage/SkillPageHeaderTemplate"
import SkillPageMethodology from "../../03-organisms/skillpage/SkillPageMethodology";
import SkillPageProjectsUxUi from "../../03-organisms/skillpage/SkillPageProjectsUxUi";
import SkillPageWrapper from "../../03-organisms/skillpage/SkillPageWrapper";


const UxUiDesigner = () => {
    return <>
            <SkillPageWrapper>
                <SkillPageHeaderTemplate isUXUI />
                <SkillPageClients isUXUI />
                <SkillPageMethodology isUXUI />
                <SkillPageProjectsUxUi />
            </SkillPageWrapper>
    </>

};


export default UxUiDesigner;