/*       ------- EVERGREEN -------        */
import Leaves from "../../../assets/images/projects/uiux-projects/Evergreen/Leaves.png";
import DecoEvergreen from "../../../assets/images/projects/uiux-projects/Evergreen/DecorativePicture.png";
import HeaderEvergreen from "../../../assets/images/projects/uiux-projects/Evergreen/header-evergreen.png"
import EvergreenFirst from "../../../assets/images/projects/uiux-projects/Evergreen/FirstView.png";
import EvergreenFolioDesktop from "../../../assets/images/projects/uiux-projects/Evergreen/Evergreen-folio_Desktop.png";
import EvergreenFolioMobile from "../../../assets/images/projects/uiux-projects/Evergreen/Evergreen-folio_Mobile.png";

/*       ------- Samsung -------        */
import Samsungfirst from "../../../assets/images/projects/uiux-projects/Samsung/FirstView.png"
import SamsungFolio01 from "../../../assets/images/projects/uiux-projects/Samsung/Samsung_desktop.png"
import SamsungFolio02 from "../../../assets/images/projects/uiux-projects/Samsung/Samsung2_desktop.png"
import SamsungFolio03 from "../../../assets/images/projects/uiux-projects/Samsung/Samsung3_desktop.png"
import SamsungFolioMobile01 from "../../../assets/images/projects/uiux-projects/Samsung/Samsung_mobile.png"
import SamsungFolioMobile02 from "../../../assets/images/projects/uiux-projects/Samsung/Samsung2_mobile.png"
import SamsungFolioMobile03 from "../../../assets/images/projects/uiux-projects/Samsung/Samsung3_mobile.png"
import SamsungHeader from "../../../assets/images/projects/uiux-projects/Samsung/header-samsung.png";
import SamsungStar from "../../../assets/images/projects/uiux-projects/Samsung/star.png";
import SamsungDeco from "../../../assets/images/projects/uiux-projects/Samsung/decorative-samung.png";

/*       ------- KIA -------        */
import KiaFirstImg from "../../../assets/images/projects/uiux-projects/Kia/kia-first.png";
import KiaHeaderImg from "../../../assets/images/projects/uiux-projects/Kia/header-kia.png";
import KiaDecoImg from "../../../assets/images/projects/uiux-projects/Kia/deco-kia.png";
import KiaFolioImg01 from "../../../assets/images/projects/uiux-projects/Kia/SUVDAYS_Posters_Landscape_A3.png";
import KiaFolioImg02 from "../../../assets/images/projects/uiux-projects/Kia/Kia-folio.png";
import KiaFolioImg03 from "../../../assets/images/projects/uiux-projects/Kia/Art_Gallery_Mockup.png";
import KiaWheelImg from "../../../assets/images/projects/uiux-projects/Kia/steeringwheel.png";

/*       ------- TELENET -------        */
import TelenetFirstImg from "../../../assets/images/projects/uiux-projects/Telenet/FirstView.png";
import TelenetHeaderImg from "../../../assets/images/projects/uiux-projects/Telenet/header-telenet.png";
import TelenetDecorativeImg from "../../../assets/images/projects/uiux-projects/Telenet/decorativeTelenet.jpg";
import TelenetSignalImg from "../../../assets/images/projects/uiux-projects/Telenet/Signal.png";
import TelenetFolioImg01 from "../../../assets/images/projects/uiux-projects/Telenet/Telenetfolio01.gif";
import TelenetFolioImg02 from "../../../assets/images/projects/uiux-projects/Telenet/TelenetFolio02.jpg";
import TelenetFolioImg03 from "../../../assets/images/projects/uiux-projects/Telenet/TelenetFolio03.jpg";
import TelenetFolioImg04 from "../../../assets/images/projects/uiux-projects/Telenet/TelenetFolio04.jpg";
import { colorsRoles, projectColors } from "../../../01-atoms/colors";

/*       ------- METHODOLOGY ICONS -------        */
import { Agile, AtomicDesign, Html5, Invision, Photoshop, PixelPerfect, SamsungGuidelines, Sass, Sketch, Trello, Zeplin } from "../../../01-atoms/icons/icons-methodo";


export const EvergreenProject = {
    Leaves: Leaves,
    DecoEvergreen: DecoEvergreen,
    HeaderEvergreen: HeaderEvergreen,
    EvergreenFirst : EvergreenFirst,
    EvergreenFolioDesktop :EvergreenFolioDesktop,
    EvergreenFolioMobile: EvergreenFolioMobile,

}

export const SamsungProject = {
    Samsungfirst: Samsungfirst,
    SamsungHeader : SamsungHeader,
    SamsungFolio01:SamsungFolio01,
    SamsungFolio02: SamsungFolio02,
    SamsungFolio03: SamsungFolio03,
    SamsungFolioMobile01: SamsungFolioMobile01,
    SamsungFolioMobile02 : SamsungFolioMobile02,
    SamsungFolioMobile03: SamsungFolioMobile03,
    SamsungStar : SamsungStar,
    SamsungDeco : SamsungDeco,

}
export const KiaProject = {
    KiaFirst : KiaFirstImg,
    KiaHeader : KiaHeaderImg,
    KiaDeco : KiaDecoImg,
    KiaWheel : KiaWheelImg,
    KiaFolio01 : KiaFolioImg01,
    KiaFolio02 : KiaFolioImg02,
    KiaFolio03 : KiaFolioImg03,
}

export const TelenetProject = {
    Telenetfirst : TelenetFirstImg,
    TelenetHeader : TelenetHeaderImg,
    TelenetDeco : TelenetDecorativeImg,
    TelenetSignal : TelenetSignalImg,
    TelenetFolio01 : TelenetFolioImg01,
    TelenetFolio02 : TelenetFolioImg02,
    TelenetFolio03 : TelenetFolioImg03,
    TelenetFolio04 : TelenetFolioImg04,
}

type Iimage = {
    srcDesktop: string;
    srcMobile: string;
    altImg: string;
    bgColor: string;
}

type Iroles = {
    titleRole: string;
    descriptionRole: string;
}

type IMethodo = {
    title?: string;
    altImage?: string;
    logo?: string;
}

type IUIUXProjects = 
    {
        title?: string;
        skill?: string;
        fields?: string;
        description?: string;
        roles?: Iroles[];
        slug?: string;
        headerImage?: string;
        decorativeimage?: string;
        mainColor?: string;
        FieldTextColorVisible?: string;
        backgroundpicture?: string;
        foregroundpicture?: string;
        methodology?: IMethodo[];
        images?: Iimage[];
    }


export const UIUXProjects: IUIUXProjects[]= [
    {
        title: "Evergreen",
        skill: "UX/UI Designer",
        fields: "UI Design • Prototyping • Html/CSS",
        description: "Evergreen Garden Care is the leading garden care company outside North America, producing high quality garden care products designed to help people create their own green oasis amid the rush of modern life.",
        roles: [
            {
                titleRole: "Team",
                descriptionRole:"6 people",
            },
            {
                titleRole: "Role",
                descriptionRole: "Design the entire platform based on the wireframes provided. Implement atomic components (html/css)",
            },
            {
                titleRole: "Time",
                descriptionRole:"About 4 months",
            },
        ],
        slug: "Evergreen",
        headerImage: EvergreenProject.HeaderEvergreen,
        decorativeimage: EvergreenProject.DecoEvergreen,
        mainColor: projectColors.Evergreen,
        FieldTextColorVisible: projectColors.Evergreen,
        backgroundpicture: EvergreenProject.EvergreenFirst,
        foregroundpicture: EvergreenProject.Leaves,
        methodology: [
            Trello,
            AtomicDesign,
            Sketch,
            Agile,
            Invision,
            Html5,
            Sass,
        ],
        images: [
            {
                srcDesktop: EvergreenProject.EvergreenFolioDesktop,
                srcMobile: EvergreenProject.EvergreenFolioMobile,
                altImg: "Evergreen project portfolio",
                bgColor: colorsRoles.White,
            },
        ]

    },
    {
        title: "Samsung",
        skill: "UX/UI Designer",
        fields: "UI Design • Prototyping",
        description: "Samsung is a South Korean electronics company which sells televisions, household appliances and perhaps most notably, mobile devices.",
        roles: [
            {
                titleRole: "Team",
                descriptionRole:"4 people",
            },
            {
                titleRole: "Role",
                descriptionRole:"The Samsung Members app have got some updates and wants to inform the clients via its website. Plus, retain the audience via monthly newsletters. I had to Keep consistency and design regarding all technical contraints (Samsung guidelines)",
            },
            {
                titleRole: "Time",
                descriptionRole:"Around 3 months",
            },
        ],
        slug: "Samsung",
        headerImage: SamsungProject.SamsungHeader,
        decorativeimage: SamsungProject.SamsungDeco,
        mainColor: projectColors.Samsung,
        backgroundpicture: SamsungProject.Samsungfirst,
        foregroundpicture: SamsungProject.SamsungStar,
        FieldTextColorVisible: colorsRoles.White,
        methodology: [
            SamsungGuidelines,
            AtomicDesign,
            PixelPerfect,
            Sketch,
            Agile,
            Invision,
        ],
        images: [
            {
                srcDesktop: SamsungProject.SamsungFolio01,
                srcMobile: SamsungProject.SamsungFolioMobile01,
                altImg: "Samsung project portfolio 1",
                bgColor: colorsRoles.White,
            },
            {
                srcDesktop: SamsungProject.SamsungFolio02,
                srcMobile: SamsungProject.SamsungFolioMobile02,
                altImg: "Samsung project portfolio 2",
                bgColor: colorsRoles.White,
            },
            {
                srcDesktop: SamsungProject.SamsungFolio03,
                srcMobile: SamsungProject.SamsungFolioMobile03,
                altImg: "Samsung project portfolio 3",
                bgColor: colorsRoles.White,
            },
        ]

    },
    {
        title: "Kia",
        skill: "UX/UI Designer",
        fields: "UI Design • Photo Retouching",
        description: "Kia Motors Corporation is a South Korean multinational automotive manufacturer headquartered in Seoul. ",
        roles: [
            {
                titleRole: "Team",
                descriptionRole:"3 people",
            },
            {
                titleRole: "Role",
                descriptionRole:"I had to create/imagine a landing page and advertising posters for the promotion of the new Kia SUV's. I had to retouch the car's pictures as well ",
            },
            {
                titleRole: "Time",
                descriptionRole:"Around 1 week",
            },
        ],
        slug: "Kia",
        headerImage: KiaProject.KiaHeader,
        decorativeimage: KiaProject.KiaDeco,
        mainColor: projectColors.Kia,
        backgroundpicture: KiaProject.KiaFirst,
        foregroundpicture: KiaProject.KiaWheel,
        FieldTextColorVisible: projectColors.Kia,
        methodology: [
            Trello,
            Photoshop,
            Sketch,
            PixelPerfect,
            Agile,
            Invision,
            Zeplin,
        ],
        images: [
            {
                srcDesktop: KiaProject.KiaFolio01,
                srcMobile: KiaProject.KiaFolio01,
                altImg: "Kia project portfolio 1",
                bgColor: colorsRoles.White,
            },
            {
                srcDesktop: KiaProject.KiaFolio02,
                srcMobile: KiaProject.KiaFolio02,
                altImg: "Kia project portfolio 2",
                bgColor: colorsRoles.White,
            },
            {
                srcDesktop: KiaProject.KiaFolio03,
                srcMobile: KiaProject.KiaFolio03,
                altImg: "Kia project portfolio 3",
                bgColor: colorsRoles.White,
            },
        ]

    },
    {
        title: "Telenet",
        skill: "UX/UI Designer",
        fields: "UX/UI Design • Prototyping",
        description: " Telenet specialises in the supply of broadband internet, fixed and mobile telephony services and cable television to customers throughout Flanders and Brussels over a powerful HFC (hybrid fibre-coax) network",
        roles: [
            {
                titleRole: "Team",
                descriptionRole:"2 people",
            },
            {
                titleRole: "Role",
                descriptionRole:"Create an interface in order to present the concept of the Digicovers (custom adhesive sheets that cover client's Digicorder). And create the home page in order to promote the \"Signal switch\".",
            },
            {
                titleRole: "Time",
                descriptionRole:"Around 3 weeks",
            },
        ],
        slug: "Telenet",
        headerImage: TelenetProject.TelenetHeader,
        decorativeimage:  TelenetProject.TelenetDeco,
        mainColor: projectColors.Telenet,
        backgroundpicture:  TelenetProject.Telenetfirst,
        foregroundpicture:  TelenetProject.TelenetSignal,
        FieldTextColorVisible: projectColors.Telenet,
        methodology: [
            Sketch,
            PixelPerfect,
            Agile,
            Invision,
            Zeplin,
        ],
        images: [
            {
                srcDesktop: TelenetProject.TelenetFolio01,
                srcMobile: TelenetProject.TelenetFolio01,
                altImg: "Telenet project portfolio 1",
                bgColor: colorsRoles.White,
            },
            {
                srcDesktop: TelenetProject.TelenetFolio02,
                srcMobile: TelenetProject.TelenetFolio02,
                altImg: "Telenet project portfolio 3",
                bgColor: colorsRoles.White,
            },
            {
                srcDesktop: TelenetProject.TelenetFolio03,
                srcMobile: TelenetProject.TelenetFolio03,
                altImg: "Telenet project portfolio 3",
                bgColor: colorsRoles.White,
            },
            {
                srcDesktop: TelenetProject.TelenetFolio04,
                srcMobile: TelenetProject.TelenetFolio04,
                altImg: "Telenet project portfolio 1",
                bgColor: colorsRoles.White,
            },

        ]

    },



]