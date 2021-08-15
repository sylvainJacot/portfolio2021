
const ResponsiveImage = (props) => {
    return <>
        <picture >
            <source
                srcSet={props.srcDesktop}
                media={"(min-width: " + props.breakPoint + ")"}
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