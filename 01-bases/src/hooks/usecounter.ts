import { gsap } from "gsap"
import { useEffect, useRef, useState } from "react"


export const useCounter = () => {
    const [counter, setCounter] = useState(5)

    const counterElement = useRef<HTMLHeadingElement>(null)

    const MAX_COUNT = 10

    const handleSuma = () => {
        setCounter(pre => Math.min(pre + 1, MAX_COUNT))
    }

    useEffect(() => {
        if (counter < 10) return;
        console.log("%cEl numero es mayor a 10", "color : red")

        const tl = gsap.timeline()

        tl.to(counterElement.current, { y: -10, duration: 0.5, ease: 'ease.out' })
            .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })

    }, [counter])

    return{
        handleSuma,
        counter,
        counterElement
    }
}