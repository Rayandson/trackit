import { createContext, useState } from "react";

export const PictureContext = createContext();

export function PictureContextProvider ({children}) {
    const [picture, setPicture] = useState("")

    return(
        <PictureContext.Provider value={{picture, setPicture}}>
            {children}
        </PictureContext.Provider>
    )
}