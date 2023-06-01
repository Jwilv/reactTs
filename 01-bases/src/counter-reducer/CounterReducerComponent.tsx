import { useReducer } from 'react'
import { CounterState } from './interfaces';
import { counterReducer } from './state';
import * as CounterActions from './actions';

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
}

export const CounterReducerComponent = () => {

    const [{counter,previous,changes}, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleReset = () => {
        dispatch( CounterActions.doReset() )
    }

    const handleSuma = ()=>{
        dispatch( CounterActions.doIncrementBy(10) )
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
