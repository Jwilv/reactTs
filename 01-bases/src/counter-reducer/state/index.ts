import { counterAction } from "../actions";
import { CounterState } from "../interfaces";

export const counterReducer = (state: CounterState, action: counterAction): CounterState => {

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