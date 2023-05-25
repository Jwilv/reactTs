import { useCounter } from '../hooks/usecounter'

export const CounterHook = () => {

    const {counter,counterElement,handleSuma} = useCounter()


    return (
        <>
            <h1>effect</h1>
            <p ref={counterElement}>{counter}</p>
            <button onClick={handleSuma}>+1</button>
        </>
    )
}
