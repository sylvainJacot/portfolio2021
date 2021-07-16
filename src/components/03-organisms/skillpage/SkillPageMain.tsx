import {FC, useContext} from "react";
import styled from "styled-components";
import { GlobalContext } from "../../data/contexts/global/GlobalProvider";


type IPageWrapper = {
    navBarSize: number,
}

export const PageWrapper = styled.main<IPageWrapper>`

    @media (min-width: 1024px) {
        width: calc(100% - ${({navBarSize}) => navBarSize}px);
    }
`

const SkillPageMain:FC = props => {

    const {navBarSize} = useContext(GlobalContext)

    return <>

        <PageWrapper navBarSize={navBarSize}>
            {props.children}
        </PageWrapper>

    </>

};


export default SkillPageMain;