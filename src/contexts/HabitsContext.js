import { createContext, useState } from "react";

export const HabitsContext = createContext();

export function HabitsContextProvider({children}) {
    const [habits, setHabits] = useState([]);
    return(
        <HabitsContext.Provider value={{habits, setHabits}}>
            {children}
        </HabitsContext.Provider>
    )
}