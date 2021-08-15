
import styled from "styled-components";
import { colorsRoles } from "../../01-atoms/colors";
import { fontsFamilies } from "../../01-atoms/GlobalStyle";


export const Box = styled.div`

width: 50%;
margin-bottom: 1.5rem;

& h5 {
font-family: ${fontsFamilies.poppinsBold};
font-size: 1rem;
color: ${colorsRoles.DarkGrey};
text-align: center;
line-height: 2rem;
}

& p {
font-family: ${fontsFamilies.poppinsRegular};
font-size: 1rem;
color: ${colorsRoles.DarkGrey};
letter-spacing: 0;
text-align: center;
line-height: 1.5rem;
}

`;


const ProjectItemDetailMainTitleShortDesc = (props) => {
    return <>
        <Box>
            <h5>{props.titleRole}</h5>
            <p>{props.descriptionRole}</p>
        </Box>
    </>

};

export default ProjectItemDetailMainTitleShortDesc;