import { useEffect, useRef } from "react";

export default function useEffectOnUpdates(effectFunction, deps){
    const firstRender = useRef(true)
    useEffect(() => {
        if(!firstRender.current){
            effectFunction()
        }
        firstRender.current = false
    }, deps)
}