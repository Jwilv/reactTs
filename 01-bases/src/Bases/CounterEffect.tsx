import { gsap } from 'gsap'
import { useEffect, useState } from 'react'

export const CouterEffect = () => {

    const [counter, setCounter] = useState(5)

    const MAX_COUNT = 10

    const handleSuma = () => {
        setCounter(pre => Math.min(pre + 1, MAX_COUNT) )
    }

    useEffect(() => {
        if (counter < 10 ) return ;
        console.log("%cEl numero es mayor a 10","color : red")

        gsap.to('p',{y:-10, duration:0.5 , ease:'ease.out'}).then( ()=>{
            gsap.to('p',{y:0, duration:1 , ease:'bounce.out'})
        })
    }, [counter])


    return (
        <>
            <h1>effect</h1>
            <p>{counter}</p>
            <button onClick={handleSuma}>+1</button>
        </>
    )
}
