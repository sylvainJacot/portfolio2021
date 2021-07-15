import {FC} from "react";
import styled from "styled-components";


type IPropsMain = {
    children:any;
}

export const PageWrapper = styled.main`
    width: calc(100% - 80px);
`

const SkillPageMain:FC<IPropsMain> = ({children}) => {
    return <>

        <PageWrapper>
            {children}
        </PageWrapper>

    </>

};


export default SkillPageMain;