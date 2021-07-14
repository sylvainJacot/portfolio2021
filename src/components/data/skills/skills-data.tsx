// IMAGES
import Parrot from "../../assets/images/parrot.png";
import Fox from "../../assets/images/fox.png";
import Horse from "../../assets/images/horse.png";

//COLOR
import { colorsRoles, gradients } from "../../01-atoms/colors";
import icons from "../../01-atoms/icons/icons";

export const skills = [
    {
        SkillTitle : "UX/UI Designer",
        SkillQuote : "I understand the perfect user interface should look good and work even better.",
        SkillIntro : "This is the intro of UX/UI",
        SkillHeroImg : Parrot,
        SkillColor : colorsRoles.uiCol,
        SkillLightCtaLabel : false,
        SkillGradient : gradients.uiCol,
        SkillCtaLabel : "Let's draw !",
        SkillRouterPath : "/uxui-designer",
    },
    {
        SkillTitle : "Frontend developer",
        SkillQuote : "I understand the scope, requirements, and technical restraints of the project I am currently working on.",
        SkillIntro : "This is the intro of Frontend developer",
        SkillHeroImg : Fox,
        SkillColor : colorsRoles.frontCol,
        SkillLightCtaLabel : true,
        SkillGradient : gradients.frontCol,
        SkillCtaLabel : "Dacodac !",
        SkillRouterPath : "/frontend-developer",
    },
    {
        SkillTitle : "Photo retoucher",
        SkillQuote : "I understand that quality is not just about the retouching itself but also about the added value of service that you provide",
        SkillIntro : "This is the intro of Photo retoucher",
        SkillHeroImg : Horse,
        SkillColor : colorsRoles.retouchCol,
        SkillLightCtaLabel : true,
        SkillGradient : gradients.retouchCol,
        SkillCtaLabel : "What a beauty !",
        SkillRouterPath : "/photo-retoucher"
    }
]

export const uiuxClients = [
    {
        ClientName : "Samsung",
        ClientLogo : icons.Samsung,
        ClientAlt : "Samsung client"
    },
    {
        ClientName : "Kia",
        ClientLogo : icons.Kia,
        ClientAlt : "Kia client"
    },
    {
        ClientName : "Love The Garden",
        ClientLogo : icons.LoveTheGarden,
        ClientAlt : "Love The Garden client"
    },
    {
        ClientName : "Mazda",
        ClientLogo : icons.Mazda,
        ClientAlt : "Mazda client"
    },
    
]

export const devClients = [
    {
        ClientName : "Samsung",
        ClientLogo : icons.Kia,
        ClientAlt : "Samsung client"
    },
    {
        ClientName : "Kia",
        ClientLogo : icons.Kia,
        ClientAlt : "Kia client"
    },
    {
        ClientName : "Love The Garden",
        ClientLogo : icons.Kia,
        ClientAlt : "Love The Garden client"
    },
    {
        ClientName : "Mazda",
        ClientLogo : icons.Mazda,
        ClientAlt : "Mazda client"
    },
    
]

export const photoClients = [
    {
        ClientName : "Samsung",
        ClientLogo : icons.Kia,
        ClientAlt : "Samsung client"
    },
    {
        ClientName : "Kia",
        ClientLogo : icons.Kia,
        ClientAlt : "Kia client"
    },
    {
        ClientName : "Love The Garden",
        ClientLogo : icons.Kia,
        ClientAlt : "Love The Garden client"
    },
    {
        ClientName : "Mazda",
        ClientLogo : icons.Mazda,
        ClientAlt : "Mazda client"
    },
    
]