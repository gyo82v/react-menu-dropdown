import { createContext } from "react"
import useToggle from "../hooks/useToggle"

export const MenuContext = createContext()

export default function Menu({children, onOpen}){
    const [open, toggleOpen] = useToggle({initialValue : true, onToggle : onOpen})

    return(
        <MenuContext.Provider value={{open, toggleOpen}}>
            <div>
                {children}
            </div>
        </MenuContext.Provider>
    )
}