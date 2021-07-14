import { FC, createContext } from "react";

// Check tuto : https://wanago.io/2020/09/28/react-context-api-hooks-typescript/

type IGlobalContext = {
    navBarSize: number;
}

export const GlobalContext = createContext<IGlobalContext | null>(null);

export const GlobalContextValues: IGlobalContext = {
    navBarSize: 0,
  };


const GlobalProvider:FC= ({children}) => {

    return <>
        <GlobalContext.Provider value={GlobalContextValues}>
            {children}
        </GlobalContext.Provider>
        </>
}

export default GlobalProvider;