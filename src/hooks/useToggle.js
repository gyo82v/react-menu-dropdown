import { useState } from "react";
import useEffectOnUpdates from "./useEffectOnUpdates";

export default function useToggle(initialValue = false, onToggle = () => {}){
    const [on, setOn] = useState(initialValue)
    const toggle = () => setOn(o => !o)
    useEffectOnUpdates(onToggle, [on])
    return[on, toggle]
}