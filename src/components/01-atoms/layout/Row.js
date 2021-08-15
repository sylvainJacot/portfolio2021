import styled from "styled-components";
import media from "../mediaqueries/MediaQueries";
import {colCount} from "./Grid";


const Row = styled.div`
  grid-column-start: ${(props) => (props.StartXs ? props.StartXs : "1")};
  grid-column-end:  ${(props) => (props.EndXs ? props.EndXs : colCount.mColCount + 1)};

  ${media.sm} {
    grid-column-start: ${(props) => (props.StartSm ? props.StartSm : "1")};
    grid-column-end:  ${(props) => (props.EndSm ? props.EndSm : colCount.tColCount)};
  }
  ${media.md} {
    grid-column-start: ${(props) => (props.StartMd ? props.StartMd : "1")};
    grid-column-end:  ${(props) => (props.EndMd ? props.EndMd : colCount.lColCount)};
  }
  ${media.lg} {
    grid-column-start: ${(props) => (props.StartLg ? props.StartLg : "1")};
    grid-column-end:  ${(props) => (props.EndLg ? props.EndLg : colCount.dColCount)};
  }
`;

export default Row;