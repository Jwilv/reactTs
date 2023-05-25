import { useCounter } from '../hooks/usecounter'

export const CounterHook = () => {

    const {counter,elementToAnimate,handleSuma} = useCounter({initialCounter :  10, maxCount : 20})


    return (
        <>
            <h1>Hook</h1>
            <p ref={elementToAnimate}>{counter}</p>
            <button onClick={handleSuma}>+1</button>
        </>
    )
}
