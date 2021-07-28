import { FC } from "react";

type IResponsiveImage = {
    srcDesktop?: string;
    breakPoint?: number;
    srcMobile?: string;
    altImage?: string;
    srcSet?: string;
}

const ResponsiveImage:FC <IResponsiveImage>= (props) => {
    return <>
        <picture >
            <source
                srcSet={props.srcDesktop}
                media={"(min-width: " + props.breakPoint + "px)"}
            />
            <img
                src={props.srcMobile}
                alt={props.altImage}
                srcSet={props.srcMobile}
            />
        </picture>

    </>

};

export default ResponsiveImage;