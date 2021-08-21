
import styled from "styled-components";
import ResponsiveImage from "../../02-molecules/images/ResponsiveImage";
import {media} from "../../01-atoms/mediaqueries/MediaQueries";
import { transitions } from "../../01-atoms/animations/transitions";
import { useContext } from "react";
import { GlobalContext } from "../../data/contexts/global/GlobalProvider";


export const HeaderStyle = styled.header`
position: relative;
height: 208px;
width: 100%;
padding-top: 40px;
padding-bottom: 16px;
display: flex;
justify-content: center;
align-items: flex-end;
background-color: ${props => props.mainColor} ;
margin-top: ${props => props.navBarSize}px;

${media.md}{
 margin-top: 0px;
height: 400px;
padding-top: 1.5rem;
width: calc(100% - ${props => props.navBarSize}px);
};

& picture {
width: 80%;
height: 100%;
transition: ${transitions.easeOut2ms};
display: flex;
justify-content: center;
align-items: center;

&:hover {
transform: scale(1.01);
transition: ${transitions.easeOut2ms};
}

${media.md}{
width: 48%;
};
& img {

max-height: 90%;

}

}



`;

export const HeaderPhotoStyle = styled.div`
width: 100%;
height: 120px;
background: no-repeat center url(${props => props.headerbgimge});
background-size: cover;

${media.sm}{
height: 136px;
}

${media.md}{
height: 200px;
}
`;

const ProjectItemDetailHeader = (props) => {

    const {navBarSize} = useContext(GlobalContext);

    return <>

            { props.isDefaultProjectHeader && 
                <HeaderStyle mainColor={props.mainColor} navBarSize={navBarSize}>
                <ResponsiveImage
                    srcMobile={props.headerImage}
                />
                </HeaderStyle>
            } 
            
            {   props.isPhotoProjectHeader &&
                <HeaderPhotoStyle headerbgimge={props.headerbgimge}>
                </HeaderPhotoStyle>
            }
    </>
};

export default ProjectItemDetailHeader;
