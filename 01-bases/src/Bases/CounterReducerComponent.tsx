import { useReducer } from 'react'

interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}

const INITIAL_STATE : CounterState= {
    counter: 0,
    previous: 0,
    changes: 0,
}

export const CounterReducerComponent = () => {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

    const handleSuma = () => {
        setCounter(pre => pre + 1)
    }

    return (
        <>
            <p>{counter}</p>
            <button onClick={handleSuma}>+1</button>
        </>
    )
}
