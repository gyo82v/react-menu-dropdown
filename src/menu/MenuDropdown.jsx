import { useContext } from "react"
import { MenuContext } from "./Menu"

export default function MenuDropdown({children}){
    const {open} = useContext(MenuContext)

    return open ? (<div>{children}</div>) : null
}