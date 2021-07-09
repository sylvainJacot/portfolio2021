import {createContext} from "react";

// type Context = {
//     NavHeight : number,
// }

// we initialise them without default values, to make that happen, we
// apply the Partial helper type.
// export const GlobalContext = createContext<Partial<Context>>({});
export const GlobalContext = createContext(null);

