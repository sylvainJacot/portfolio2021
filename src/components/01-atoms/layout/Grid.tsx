import {FC, useContext} from 'react';
import styled from "styled-components";
import { GlobalContext } from "../../data/contexts/global/GlobalProvider";
import { media } from "../mediaqueries/MediaQueries";

export const colSizes = {
    dColSize : '3.5rem',
    lColSize : '2.5rem',
    tColSize : '4.5vw',
    mColSize : '7.8vw',
}


export const colCount = {
    dColCount : 21,
    lColCount : 21,
    tColCount : 17,
    mColCount : 11,
}

type IGridProps = {
    navBarSize: number;
}

export const GridWrapper = styled.div<IGridProps>`

    display: grid;
    grid-template-columns: repeat(${colCount.mColCount}, ${colSizes.mColSize});
    justify-content: center;

    ${media.sm} {
    grid-template-columns: repeat( ${colCount.tColCount}, ${colSizes.tColSize});
    }

    ${media.md} {
    width: calc(100% - ${({navBarSize}) => navBarSize}px - .5rem);
    grid-template-columns: repeat( ${colCount.lColCount}, ${colSizes.lColSize});
    }

    ${media.lg} {
    grid-template-columns: repeat( ${colCount.dColCount}, ${colSizes.dColSize});
    }

`;



const Grid: FC = (props) => {
    const { navBarSize }  = useContext(GlobalContext);

    return <>
            <GridWrapper navBarSize={navBarSize}>
                {props.children}
            </GridWrapper>
    </>
}
export default Grid;




