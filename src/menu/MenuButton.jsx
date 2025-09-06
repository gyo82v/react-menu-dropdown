import { useContext } from "react"
import { MenuContext } from "./Menu"
import Button from "../components/Button"

export default function MenuButton({children}){
    const {toggleOpen} = useContext(MenuContext)

    return ( <Button onClick={toggleOpen}>{children}</Button> )
}