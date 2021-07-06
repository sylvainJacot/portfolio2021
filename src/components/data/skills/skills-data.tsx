// IMAGES
import Parrot from "../../assets/images/parrot.png";
import Fox from "../../assets/images/fox.png";
import Horse from "../../assets/images/horse.png";

//COLOR
import { colorsRoles, gradients } from "../../01-atoms/colors";

export const skills = [
    {
        SkillTitle : "UX/UI Designer",
        SkillQuote : "I understand the perfect user interface should look good and work even better.",
        SkillHeroImg : Parrot,
        SkillColor : colorsRoles.uiCol,
        SkillLightCtaLabel : false,
        SkillGradient : gradients.uiCol
    },
    {
        SkillTitle : "Frontend developer",
        SkillQuote : "I understand the scope, requirements, and technical restraints of the project I am currently working on.",
        SkillHeroImg : Fox,
        SkillColor : colorsRoles.frontCol,
        SkillLightCtaLabel : true,
        SkillGradient : gradients.frontCol
    },
    {
        SkillTitle : "Photo retoucher",
        SkillQuote : "I understand that quality is not just about the retouching itself but also about the added value of service that you provide",
        SkillHeroImg : Horse,
        SkillColor : colorsRoles.retouchCol,
        SkillLightCtaLabel : true,
        SkillGradient : gradients.retouchCol
    }
]