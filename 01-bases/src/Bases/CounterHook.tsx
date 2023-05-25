import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'

export const CounterHook = () => {




    return (
        <>
            <h1>effect</h1>
            <p ref={counterElement}>{counter}</p>
            <button onClick={handleSuma}>+1</button>
        </>
    )
}
