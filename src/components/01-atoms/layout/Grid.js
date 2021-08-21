import { useContext} from 'react';
import styled from "styled-components";
import { GlobalContext } from "../../data/contexts/global/GlobalProvider";
import { media } from "../mediaqueries/MediaQueries";


export const colSizes = {
    lg : '3.5rem',
    md : '2.5rem',
    sm : '4.5vw',
    xs : '7.8vw',
}


export const colCount = {
    lg : 21,
    md : 21,
    sm : 17,
    xs : 11,
}

export const gridFullWidth = {
    xs : `${colCount.xs} * ${colSizes.xs}`,
    sm : `${colCount.sm} * ${colSizes.sm}`,
    md : `${colCount.md} * ${colSizes.md}`,
    lg : `${colCount.lg} * ${colSizes.lg}`,
}

export const gridSideMargins = {
    xs : `calc((100% - (${gridFullWidth.xs})) / 2)` ,
    sm : `calc((100% - (${gridFullWidth.sm})) / 2)` ,
    md : `calc(((100% - (${gridFullWidth.md})) / 2) - 40px)` ,
    lg : `calc(((100% - (${gridFullWidth.lg})) / 2) - 40px)` ,
}


export const GridWrapper = styled.div`

    display: grid;
    grid-template-columns: repeat(${colCount.xs}, ${colSizes.xs});
    justify-content: center;

    ${media.sm} {
    grid-template-columns: repeat( ${colCount.sm}, ${colSizes.sm});
    }

    ${media.md} {
    width: calc(100% - ${({navBarSize}) => navBarSize}px);
    grid-template-columns: repeat(${colCount.md}, ${colSizes.md});
    }

    ${media.lg} {
    grid-template-columns: repeat(${colCount.lg}, ${colSizes.lg});
    }

`;



const Grid = (props) => {
    const { navBarSize }  = useContext(GlobalContext);

    return <>
            <GridWrapper navBarSize={navBarSize}>
                {props.children}
            </GridWrapper>
    </>
}
export default Grid;




