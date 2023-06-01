import { useReducer } from 'react'
import { CounterState } from './interfaces';

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
}



const counterReducer = (state: CounterState, action: counterAction): CounterState => {

    switch (action.type) {
        case 'reset':
            return {
                counter: 0,
                previous: 0,
                changes: 0,
            }

        case 'incrementBy':
            return{
                ...state,
                counter : state.counter + action.payload.value,
                previous : state.counter,
                changes : state.changes + 1,
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

    const handleSuma = ()=>{
        dispatch({type:'incrementBy', payload:{value : 10}})
    }

    return (
        <>
            <p>counter: {counter}</p>
            <p>chages: {changes}</p>
            <p>previoous: {previous}</p>
            <button onClick={handleSuma}>+10</button>
            <button onClick={handleReset}>reset</button>
        </>
    )
}
