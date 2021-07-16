
import SkillPageClients from "../../03-organisms/skillpage/SkillPageClients";
import SkillPageHeaderTemplate from "../../03-organisms/skillpage/SkillPageHeaderTemplate"
import SkillPageMain from "../../03-organisms/skillpage/SkillPageMain";
import SkillPageMethodology from "../../03-organisms/skillpage/SkillPageMethodology";


const UxUiDesigner = () => {
    return <>

        <SkillPageMain>
            <SkillPageHeaderTemplate isUXUI />
            <SkillPageClients isUXUI />
            <SkillPageMethodology isUXUI />
        </SkillPageMain>

    </>

};


export default UxUiDesigner;