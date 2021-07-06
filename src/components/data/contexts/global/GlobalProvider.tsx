import { FC } from "react";
import { GlobalContext } from "./GlobalContext";


type Props = {
    children : React.ReactNode;
    value : any;
}


const GlobalProvider:FC<Props> = ({children,value}) => {

    return <>
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
        </>
}

export default GlobalProvider;