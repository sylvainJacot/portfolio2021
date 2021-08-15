import { createContext, useState } from "react";

// Inspired from : https://codesandbox.io/s/typescript-react-usecontext-example-ufwux?file=/src/Context.js:38-46

export const initialGlobalValues: IGlobalContext = {
  navBarSize: 0,
  setNavBarSize: () => {},
  aboutPageHidden: false,
  setAboutPageHidden: () => {},
};

export const GlobalContext = createContext(initialGlobalValues);

const GlobalProvider = (props) => {
  const [navBarSize, setNavBarSize] = useState(0);
  const [aboutPageHidden, setAboutPageHidden] = useState(true);

  return (
    <>
      <GlobalContext.Provider
        value={{
          navBarSize,
          setNavBarSize,
          aboutPageHidden,
          setAboutPageHidden,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    </>
  );
};

export default GlobalProvider;
