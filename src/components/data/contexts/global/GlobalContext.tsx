import {createContext} from "react";

// Check tuto : https://wanago.io/2020/09/28/react-context-api-hooks-typescript/

type GlobalValues = {
    navWidth: number
  }
  

export interface GlobalContextData {
    GlobalDatas: GlobalValues[];
  }
   
  export const GlobalContexttDefaultValue: GlobalContextData = {
    GlobalDatas: []
  }
   
export const GlobalContext = createContext<GlobalContextData>(GlobalContexttDefaultValue);

