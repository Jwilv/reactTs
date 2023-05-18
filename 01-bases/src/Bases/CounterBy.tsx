import { useState } from 'react'


// el ? es por que no es si o si necesario
interface CouterProps {
    initialValue?: number
}

interface CounterState {
    counter: number,
    clicks: number
}

export const CounterBy = ({ initialValue = 0 }: CouterProps) => {

    const [{ counter, clicks }, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0,
    })

    const handleSuma = (value: number) => {
        setCounterState(({ counter, clicks }) => ({
            counter: counter + value,
            clicks: clicks + 1
        }))
    }

    return (
        <>
            <p>CounterBy : {counter}</p>
            <p>clicks : {clicks}</p>
            <button onClick={() => handleSuma(1)}>+1</button>
            <button onClick={() => handleSuma(5)}>+5</button>
        </>
    )
}
