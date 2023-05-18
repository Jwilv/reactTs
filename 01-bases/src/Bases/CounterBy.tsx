import { useState } from 'react'


// el ? es por que no es si o si necesario
interface CouterProps {
    initialValue?: number
}

export const CounterBy = ({ initialValue = 0 }: CouterProps) => {

    const [counterState, setCounterState] = useState({
        counter: initialValue,
        clicks: 0,
    })

    const {counter, clicks} = counterState;

    const handleSuma = (value : number) => {
        setCounterState( pre => ({
            counter : pre.counter + value,
            clicks : pre.clicks + 1
        }))
    }

    return (
        <>
            <p>CounterBy : {counter}</p>
            <p>clicks : {clicks}</p>
            <button onClick={ ()=> handleSuma(1)}>+1</button>
            <button onClick={ ()=> handleSuma(5)}>+1</button>
        </>
    )
}
