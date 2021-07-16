import { FC, createContext, useState} from "react";

// Inspired from : https://codesandbox.io/s/typescript-react-usecontext-example-ufwux?file=/src/Context.tsx:38-46

type SetValue = (value: any) => void;

interface IGlobalContext  {
    navBarSize: number;
    setNavBarSize: SetValue;
    aboutPageHidden: boolean;
    setAboutPageHidden: SetValue;  
}

export const initialGlobalValues: IGlobalContext ={
    navBarSize: 0,
    setNavBarSize: () => {},
    aboutPageHidden: false,
    setAboutPageHidden: () => {}, 
}

export const GlobalContext = createContext(initialGlobalValues);


const GlobalProvider:FC= props => {

    const [navBarSize, setNavBarSize] = useState(0);
    const [aboutPageHidden, setAboutPageHidden] = useState(false);

    return <>
        <GlobalContext.Provider  value={{
            navBarSize,
            setNavBarSize,
            aboutPageHidden,
            setAboutPageHidden
        }}>

            {props.children}

        </GlobalContext.Provider>
        </>
}

export default GlobalProvider;