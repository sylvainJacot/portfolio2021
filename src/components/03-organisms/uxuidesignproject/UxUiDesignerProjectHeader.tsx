import { FC } from "react";
import styled from "styled-components";
import ResponsiveImage from "../../02-molecules/images/ResponsiveImage";
import {media} from "../../01-atoms/mediaqueries/MediaQueries";
import { transitions } from "../../01-atoms/animations/transitions";


type IHeaderStyle = {
    mainColor: string;
}

export const HeaderStyle = styled.header<IHeaderStyle>`
position: relative;
height: 208px;
width: 100%;
padding-top: 40px;
padding-bottom: 16px;
display: flex;
justify-content: center;
align-items: flex-end;
background-color: ${props => props.mainColor} ;

${media.md}{
height: 400px;
padding-top: 24px;
};

& picture {
width: 80%;
height: 100%;
transition: ${transitions.easeIn3ms};
-webkit-animation: ${transitions.easeIn3ms};
-moz-animation: ${transitions.easeIn3ms};
-o-animation:${transitions.easeIn3ms};
display: flex;
justify-content: center;
align-items: center;

&:hover {
transform: scale(.9);
transition: ${transitions.easeIn3ms};
-webkit-animation: ${transitions.easeIn3ms};
-moz-animation: ${transitions.easeIn3ms};
-o-animation: ${transitions.easeIn3ms};
}

${media.md}{
width: 48%;
};
& img {

max-height: 90%;

}

}



`;

type IUxUiDesignerProjectHeader = {
    mainColor: any;
    headerImage: any;
}

const UxUiDesignerProjectHeader:FC <IUxUiDesignerProjectHeader>= (props) => {
    return <>

            <HeaderStyle mainColor={props.mainColor}>
                <ResponsiveImage
                    srcMobile={props.headerImage}
                />
            </HeaderStyle>
    </>
};

export default UxUiDesignerProjectHeader;