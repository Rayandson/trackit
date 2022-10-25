import { createContext, useState } from "react";

export const PercentageContext = createContext();

export function PercentageContextProvider({children}) {
    const [percent, setPercent] = useState(0)

    return(
        <PercentageContext.Provider value={{percent, setPercent}}>
            {children}
        </PercentageContext.Provider>
    )
}