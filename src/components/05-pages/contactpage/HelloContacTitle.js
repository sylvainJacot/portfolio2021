import styled from "styled-components";
import { HeadingSecondaryStyle } from "../../01-atoms/typography/headings/HeadingSecondary";

export const TitleContainer = styled.div`

`;

export const HeadingSecondaryExtended = styled(HeadingSecondaryStyle)`
      position: relative;   
      overflow: hidden;
      margin-bottom: 1rem;
`;

const HelloContacTitle = () => {

    return <>
        <TitleContainer>
            <HeadingSecondaryExtended Positive={true}>Hello World !</HeadingSecondaryExtended>
        </TitleContainer>
    </>

};

export default HelloContacTitle;

