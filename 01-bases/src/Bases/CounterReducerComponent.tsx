import { useReducer } from 'react'

interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
}

type counterAction =
    | { type: 'incrementBy', payload: { value: number } }
    | { type: 'reset' };

const counterReducer = (state: CounterState, action: counterAction): CounterState => {

    switch (action.type) {
        case 'reset':
            return {
                counter: 0,
                previous: 0,
                changes: 0,
            }

        default:
            return state;
    }
}

export const CounterReducerComponent = () => {

    const [{counter,previous,changes}, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleReset = () => {
        dispatch({ type: 'reset' })
    }

    return (
        <>
            <p>{counter}</p>
            <button onClick={handleReset}>reset</button>
        </>
    )
}
