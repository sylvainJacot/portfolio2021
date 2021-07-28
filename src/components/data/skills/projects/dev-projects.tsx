import { colorsRoles, projectColors } from "../../../01-atoms/colors";
import { Html5, Sass, Javascript, Sketch, Bootsrap, Git, CSS3 } from "../../../01-atoms/icons/icons-methodo";


/*       ------- CLAVIE -------        */
import ClavieHeaderImg from "../../../assets/images/projects/dev-projects/clavie/header-clavie.png";
import ClavieDecorativeImg from "../../../assets/images/projects/dev-projects/clavie/ClavieDecorative.png";
import ClavieFolioImg01 from "../../../assets/images/projects/dev-projects/clavie/ClavieFolio01.png";
import ClavieFolioImg02 from "../../../assets/images/projects/dev-projects/clavie/ClavieFolio02.jpg";
import ClavieThumbnailImg from "../../../assets/images/projects/dev-projects/clavie/clavie_thumbnail.png";

/*       ------- SOSMART -------        */
import SoSmartThumbnailImg from "../../../assets/images/projects/dev-projects/sosmart/sosmart_thumbnail.png";
import SoSmartHeaderImg from "../../../assets/images/projects/dev-projects/sosmart/header-sosmart.png";
import SoSmartDecoImg from "../../../assets/images/projects/dev-projects/sosmart/sosmartdeco.png";
import SoSmartFolio01Img from "../../../assets/images/projects/dev-projects/sosmart/sosmart-folio01.png";

/*       ------- PARENTREPRISE -------        */
import ParentrepriseThumbnailImg from "../../../assets/images/projects/dev-projects/parentreprise/thumbnail-Parentreprise.png";
import ParentrepriseHeaderlImg from "../../../assets/images/projects/dev-projects/parentreprise/header-Parentreprise.png";
import ParentrepriseDecoImg from "../../../assets/images/projects/dev-projects/parentreprise/Parentreprise-deco.png";
import ParentrepriseFolio01Img from "../../../assets/images/projects/dev-projects/parentreprise/Parentreprise-folio.png";


export const ClavieProject = {
    Header : ClavieHeaderImg,
    Decorative : ClavieDecorativeImg,
    Folio01: ClavieFolioImg01,
    Folio02: ClavieFolioImg02,
    Thumbnail: ClavieThumbnailImg,
}

export const SoSmartProject = {
    Thumbnail: SoSmartThumbnailImg,
    Header: SoSmartHeaderImg,
    Decorative: SoSmartDecoImg,
    SoSmartFolio01: SoSmartFolio01Img,
}

export const ParentrepriseProject = {
    Thumbnail : ParentrepriseThumbnailImg,
    Header : ParentrepriseHeaderlImg,
    Decorative : ParentrepriseDecoImg,
    Folio01 : ParentrepriseFolio01Img,
}


export const CreativeDeveloperProjects = [
    {
        title: "Clavie",
        skill: "Creative Developer",
        fields: "Integration HTML/CSS",
        description: "Active for more than 40 years in the packaging sector, the CLAVIE company has developed a professional approach in the solution of packaging problems.",
        madeWith: [
            Html5,
            Sass,
            Javascript
        ],
        roles: [
            {
                titlerole: "Team",
                descriptionrole:"3 people",
            },
            {
                titlerole: "Role",
                descriptionrole:"(re)-Design of the website and implementation with in html/css/js",
            },
            {
                titlerole: "Website",
                descriptionrole:"www.clavie.be",
            },
        ],
        slug: "Clavie",
        headerImage: ClavieProject.Header,
        decorativeimage: ClavieProject.Decorative,
        maincolor: projectColors.Clavie,
        FieldTextColorVisible: projectColors.Clavie,
        thumbnailproject : ClavieProject.Thumbnail,
        methodology: [
            Sketch,
            Html5,
            Sass,
            Javascript,
            Bootsrap,
            Git,
        ],
        images: [
            {
                srcDesktop: ClavieProject.Folio01,
                srcMobile: ClavieProject.Folio01,
                altImg: "Clavie project portfolio",
                bgColor: colorsRoles.White,
            },
            {
                srcDesktop: ClavieProject.Folio02,
                srcMobile: ClavieProject.Folio02,
                altImg: "Clavie project portfolio",
                bgColor: colorsRoles.White,
            },
        ]

    },
    {
        title: "SoSmart",
        skill: "Creative Developer",
        fields: "Integration HTML/CSS",
        description: "So Smart is an online marketplace for booking hairdressing, aesthetic and well-being services under strong promotion during off-peak hours or at the last minute.\n",
        madeWith: [
            Html5,
            CSS3
        ],
        roles: [
            {
                titlerole: "Team",
                descriptionrole:"3 people",
            },
            {
                titlerole: "Role",
                descriptionrole:"Design the entire platform based on the wireframes provided. Integration of the website (html/css)",
            },
            {
                titlerole: "Website",
                descriptionrole:"www.so-smart.be",
            },
        ],
        slug: "SoSmart",
        headerImage: SoSmartProject.Header,
        decorativeimage: SoSmartProject.Decorative,
        maincolor: projectColors.SoSmart,
        FieldTextColorVisible: projectColors.Evergreen,
        thumbnailproject : SoSmartProject.Thumbnail,
        methodology: [
            Sketch,
            Html5,
            CSS3,
            Git
        ],
        images: [
            {
                srcDesktop: SoSmartProject.SoSmartFolio01,
                srcMobile: SoSmartProject.SoSmartFolio01,
                altImg: "So smart project portfolio",
                bgColor: colorsRoles.White,
            },
        ]

    },
    {
        title: "Parentreprise",
        skill: "Creative Developer",
        fields: "Integration HTML/CSS",
        description: "Parentreprise work on employee satisfaction with effective, new and original methods.Work for fulfillment and promote change in employees in all spheres of life.",
        madeWith: [
            Html5,
            Sass,
            Javascript
        ],
        roles: [
            {
                titlerole: "Team",
                descriptionrole:"3 people",
            },
            {
                titlerole: "Role",
                descriptionrole:"Design the entire platform based on the wireframes provided. Integration of the website (html/css)",
            },
            {
                titlerole: "Website",
                descriptionrole:"www.parentreprise.be",
            },
        ],
        slug: "Parentreprise",
        headerImage: ParentrepriseProject.Header,
        decorativeimage: ParentrepriseProject.Decorative,
        maincolor: projectColors.Parentreprise,
        FieldTextColorVisible: projectColors.Evergreen,
        thumbnailproject : ParentrepriseProject.Thumbnail,
        methodology: [
            Sketch,
            Html5,
            CSS3,
            Git
        ],
        images: [
            {
                srcDesktop: ParentrepriseProject.Folio01,
                srcMobile: ParentrepriseProject.Folio01,
                altImg: "Parentreprise project portfolio",
                bgColor: colorsRoles.White,
            },
        ]

    },


]