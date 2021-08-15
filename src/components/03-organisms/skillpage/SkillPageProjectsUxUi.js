import { useState, useRef, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { projectColors } from "../../01-atoms/colors";
import { UIUXProjects } from "../../data/skills/projects/uiux-projects";
import SkillPageProjectUxUiItem from "./SkillPageProjectUxUiItem";




const Box = {
    width: "100%",
    height: "100%",
};



const SkillPageProjectsUxUi = () => {

    const [bgColor, setbgColor] = useState("");
    const circleRef = useRef();

    const handleScroll = () => {

        let MediaQueryDesktop = window.matchMedia("(max-width: 1024px)")
        let lastScrollY = window.pageYOffset + 320;
        let lastScrollYDesktop = lastScrollY + 160;
        
        const NavProjectItemHeightDesktop = 880;
        const NavProjectItemHeightMobile = 825;

        const Bg1 = projectColors.Evergreen;
        const Bg2 = projectColors.Samsung;
        const Bg3 = projectColors.Kia;
        const Bg4 = projectColors.Telenet;

        if (MediaQueryDesktop.matches) {
            let refTop = circleRef.current.offsetTop;

        if (lastScrollY >= 0) {
            window.requestAnimationFrame(() => {
                setbgColor("none")
            });
        }

        if (lastScrollY >= refTop) {
            window.requestAnimationFrame(() => {
                setbgColor(Bg1)
            });

        }
        if (lastScrollY >= refTop + NavProjectItemHeightMobile) {
            window.requestAnimationFrame(() => {
                setbgColor(Bg2)
            });

        }
            if (lastScrollY >= refTop + NavProjectItemHeightMobile * 2) {
                window.requestAnimationFrame(() => {
                    setbgColor(Bg3)
                });

            }
            if (lastScrollY >= refTop + NavProjectItemHeightMobile * 3) {
                window.requestAnimationFrame(() => {
                    setbgColor(Bg4)
                });

            }


        }
        else if(circleRef.current) {
            let refTop = circleRef.current.offsetTop;
            if (lastScrollYDesktop >= 0) {
                window.requestAnimationFrame(() => {
                    setbgColor("none")
                });
            }

            if (lastScrollYDesktop >= refTop) {
                window.requestAnimationFrame(() => {
                    setbgColor(Bg1)
                });

            }
            if (lastScrollYDesktop >= refTop + NavProjectItemHeightDesktop) {
                window.requestAnimationFrame(() => {
                    setbgColor(Bg2)
                });

            }
            if (lastScrollYDesktop >= refTop + NavProjectItemHeightDesktop * 2) {
                window.requestAnimationFrame(() => {
                    setbgColor(Bg3)
                });

            }
            if (lastScrollYDesktop >= refTop + NavProjectItemHeightDesktop * 3) {
                window.requestAnimationFrame(() => {
                    setbgColor(Bg4)
                });

            }

        }

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
    })


    let { url } = useRouteMatch();


    return <>

<div style={Box} ref={circleRef}>

        {
            UIUXProjects.map((project,index) =>

            <SkillPageProjectUxUiItem
            key={index}
            bgColor={bgColor}
            slug={`${url}/${project.slug}`}
            to={project.slug}
            title={project.title}
            description={project.description}
            backgroundpicture={project.backgroundpicture}
            foregroundpicture={project.foregroundpicture}
            fields={project.fields}
            />

            )
        }

</div>
    </>

};


export default SkillPageProjectsUxUi;