import { FC, useState } from "react";
import { GlobalContext } from "./GlobalContext";


// type Props = {
//     children : React.ReactNode;
//     globalState :   ;
// }

type IGlobal = {
    mainNavWidth: number
  }

const GlobalProvider:FC = ({children}) => {

    const [globalState, setGlobalState] = useState<IGlobal>({
        mainNavWidth : 123,
      });

    return <>

            {children}

        </>
}

export default GlobalProvider;