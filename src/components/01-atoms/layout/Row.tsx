import styled from "styled-components";
import media from "../mediaqueries/MediaQueries";
import {colCount} from "./Grid";

type IRow = {
    StartXs?: number;
    EndXs?: number;
    StartSm?: number;
    EndSm?: number;
    StartMd?: number,
    EndMd?: number;
    StartLg?: number;
    EndLg?: number;
}

const Row = styled.div<IRow>`
  grid-column-start: ${(props) => (props.StartXs ? props.StartXs : "1")};
  grid-column-end: span ${(props) => (props.EndXs ? props.EndXs : colCount.mColCount)};

  ${media.sm} {
    grid-column-start: ${(props) => (props.StartSm ? props.StartSm : "1")};
    grid-column-end: span ${(props) => (props.EndSm ? props.EndSm : colCount.tColCount)};
  }
  ${media.md} {
    grid-column-start: ${(props) => (props.StartMd ? props.StartMd : "1")};
    grid-column-end: span ${(props) => (props.EndMd ? props.EndMd : colCount.lColCount)};
  }
  ${media.lg} {
    grid-column-start: ${(props) => (props.StartLg ? props.StartLg : "1")};
    grid-column-end: span ${(props) => (props.EndLg ? props.EndLg : colCount.dColCount)};
  }
`;

export default Row;