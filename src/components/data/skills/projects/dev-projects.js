import { colorsRoles, projectColors } from "../../../01-atoms/colors";
import { Html5, Sass, Javascript, Sketch, Bootsrap, Git, CSS3, Wordpress } from "../../../01-atoms/icons/icons-methodo";


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

/*       ------- PALAIS -------        */
import PalaisThumbnailImg from "../../../assets/images/projects/dev-projects/palais/thumbnail-Palais.png";
import PalaisHeaderlImg from "../../../assets/images/projects/dev-projects/palais/header-palais.png";
import PalaisDecoImg from "../../../assets/images/projects/dev-projects/palais/PalaisDecorative.jpg";
import PalaisFolio01Img from "../../../assets/images/projects/dev-projects/palais/PalaisFolio01.png";
import PalaisFolio02Img from "../../../assets/images/projects/dev-projects/palais/PalaisFolio02.png";

/*       ------- Febecoop -------        */
import FebecoopThumbnailImg from "../../../assets/images/projects/dev-projects/febecoop/thumbnail-Febecoop.png";
import FebecoopHeaderlImg from "../../../assets/images/projects/dev-projects/febecoop/header-febecoop.png";
import FebecoopDecoImg from "../../../assets/images/projects/dev-projects/febecoop/FebecoopDecorative.jpg";
import FebecoopFolio01Img from "../../../assets/images/projects/dev-projects/febecoop/FebecoopFolio01.png";
import FebecoopFolio02Img from "../../../assets/images/projects/dev-projects/febecoop/FebecoopFolio02.png";
import FebecoopFolio03Img from "../../../assets/images/projects/dev-projects/febecoop/FebecoopFolio03.png";


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

export const PalaisProject = {
    Thumbnail : PalaisThumbnailImg,
    Header : PalaisHeaderlImg,
    Decorative : PalaisDecoImg,
    Folio01 : PalaisFolio01Img,
    Folio02 : PalaisFolio02Img,
}

export const FebecoopProject = {
    Thumbnail : FebecoopThumbnailImg,
    Header : FebecoopHeaderlImg,
    Decorative : FebecoopDecoImg,
    Folio01 : FebecoopFolio01Img,
    Folio02 : FebecoopFolio02Img,
    Folio03 : FebecoopFolio03Img,
}


export const CreativeDeveloperProjects = [
    {
        title: "Palais",
        skill: "Creative Developer",
        fields: "Custom wordpress theme",
        description: "Pa’lais exists because they felt there needed to be more yummy and planet-friendly food. So they made our creamy spreads and sauces entirely out of plants.",
        madeWith: [
            Wordpress,
            Sass,
            Javascript
        ],
        roles: [
            {
                titleRole: "Team",
                descriptionRole:"2 people",
            },
            {
                titleRole: "Role",
                descriptionRole:"Wordpress theme development",
            },
            {
                titleRole: "Website",
                descriptionRole:"www.palais.bio",
            },
        ],
        slug: "Palais",
        headerImage: PalaisProject.Header,
        decorativeimage: PalaisProject.Decorative,
        mainColor: projectColors.Palais,
        FieldTextColorVisible: projectColors.Palais,
        thumbnailproject : PalaisProject.Thumbnail,
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
                srcDesktop: PalaisProject.Folio01,
                srcMobile: PalaisProject.Folio01,
                altImg: "Palais portfolio",
                bgColor: colorsRoles.White,
            },
            {
                srcDesktop: PalaisProject.Folio02,
                srcMobile: PalaisProject.Folio02,
                altImg: "Palais portfolio",
                bgColor: colorsRoles.White,
            },
        ]

    },
    {
        title: "Febecoop",
        skill: "Creative Developer",
        fields: "Custom wordpress theme",
        description: "Febecoop is an intersectoral platform of companies and associations that share the desire to develop an economy respectful of man and his environment, focused on social utility and equity, through companies organized on the basis of values, ethics and cooperative principles.",
        madeWith: [
            Wordpress,
            Sass,
            Javascript
        ],
        roles: [
            {
                titleRole: "Team",
                descriptionRole:"3 people",
            },
            {
                titleRole: "Role",
                descriptionRole:"Wordpress theme development",
            },
            {
                titleRole: "Website",
                descriptionRole:"WIP",
            },
        ],
        slug: "Febecoop",
        headerImage: FebecoopProject.Header,
        decorativeimage: FebecoopProject.Decorative,
        mainColor: projectColors.Febecoop,
        FieldTextColorVisible: projectColors.Febecoop,
        thumbnailproject : FebecoopProject.Thumbnail,
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
                srcDesktop: FebecoopProject.Folio01,
                srcMobile: FebecoopProject.Folio01,
                altImg: "Febecoop portfolio",
                bgColor: colorsRoles.White,
            },
            {
                srcDesktop: FebecoopProject.Folio02,
                srcMobile: FebecoopProject.Folio02,
                altImg: "Febecoop portfolio",
                bgColor: colorsRoles.White,
            },
            {
                srcDesktop: FebecoopProject.Folio03,
                srcMobile: FebecoopProject.Folio03,
                altImg: "Febecoop portfolio",
                bgColor: colorsRoles.White,
            },
        ]

    },
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
                titleRole: "Team",
                descriptionRole:"3 people",
            },
            {
                titleRole: "Role",
                descriptionRole:"(re)-Design of the website and implementation with in html/css/js",
            },
            {
                titleRole: "Website",
                descriptionRole:"www.clavie.be",
            },
        ],
        slug: "Clavie",
        headerImage: ClavieProject.Header,
        decorativeimage: ClavieProject.Decorative,
        mainColor: projectColors.Clavie,
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
                titleRole: "Team",
                descriptionRole:"3 people",
            },
            {
                titleRole: "Role",
                descriptionRole:"Design the entire platform based on the wireframes provided. Integration of the website (html/css)",
            },
            {
                titleRole: "Website",
                descriptionRole:"www.so-smart.be",
            },
        ],
        slug: "SoSmart",
        headerImage: SoSmartProject.Header,
        decorativeimage: SoSmartProject.Decorative,
        mainColor: projectColors.SoSmart,
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
                titleRole: "Team",
                descriptionRole:"3 people",
            },
            {
                titleRole: "Role",
                descriptionRole:"Design the entire platform based on the wireframes provided. Integration of the website (html/css)",
            },
            {
                titleRole: "Website",
                descriptionRole:"www.parentreprise.be",
            },
        ],
        slug: "Parentreprise",
        headerImage: ParentrepriseProject.Header,
        decorativeimage: ParentrepriseProject.Decorative,
        mainColor: projectColors.Parentreprise,
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