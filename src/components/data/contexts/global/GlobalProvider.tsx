import { FC } from "react";
import { GlobalContext, GlobalContexttDefaultValue } from "./GlobalContext";


const GlobalProvider:FC= ({children}) => {

    return <>
        <GlobalContext.Provider value={GlobalContexttDefaultValue}>
            {children}
        </GlobalContext.Provider>
        </>
}

export default GlobalProvider;