import {useRef, useEffect, useState} from "react";
import styled from "styled-components";
import { HeadingSecondaryStyle } from "../../01-atoms/typography/headings/HeadingSecondary";

import  {gsap, Power3 } from "gsap";
import { GlobalContext } from "../../data/contexts/global/GlobalProvider";

export const TitleContainer = styled.div`

`;

export const HeadingSecondaryExtended = styled(HeadingSecondaryStyle)`
      position: relative;   
      overflow: hidden;

      span {
        display: inline-block;
      }
`;

const HelloContacTitle = () => {

const {aboutPageHidden} = useState(GlobalContext);

    let HeadingLine1 = useRef(null);
    let HeadingLine2 = useRef(null);

    useEffect(() => {

        if(aboutPageHidden === false) {
            let tl = gsap.timeline();
            tl.from(HeadingLine1.current, {
                duration: 2,
                y: '200%',
                opacity: 0,
                ease: Power3.easeOut
            })
            tl.from(HeadingLine2.current, {
                duration: 2,
                y: '200%',
                opacity: 0,
                ease: Power3.easeOut
            }, '-=0.5')
        }

    }, [])

    return <>
        <TitleContainer>
        <HeadingSecondaryExtended Positive={true} ref={HeadingLine1}><span>Hello</span></HeadingSecondaryExtended>
        <HeadingSecondaryExtended Positive={true} ref={HeadingLine2}><span>World</span></HeadingSecondaryExtended>
        </TitleContainer>
    </>

};

export default HelloContacTitle;

