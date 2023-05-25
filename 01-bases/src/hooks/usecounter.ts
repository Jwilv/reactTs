import { gsap } from "gsap"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

interface HookProps {
    initialCounter?: number,
    maxCount: number,
}

export const useCounter = ({ initialCounter = 0, maxCount }: HookProps) => {

    const [counter, setCounter] = useState(initialCounter)

    const elementToAnimate = useRef<any>(null)

    const tl = useRef(gsap.timeline())

    const handleSuma = () => {
        setCounter(pre => Math.min(pre + 1, maxCount))
    }

    useLayoutEffect(() => {

        if(!elementToAnimate.current) return ;

        console.log('hola')

        tl.current.to(elementToAnimate.current, { y: -10, duration: 0.5, ease: 'ease.out' })
            .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' })
            .pause()

    }, [])

    useEffect(() => {

        // if( counter < maxCount ) return;
        tl.current.play(0)

    }, [counter])

    return {
        handleSuma,
        counter,
        elementToAnimate
    }
}