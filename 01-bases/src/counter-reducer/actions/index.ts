export type counterAction =
    | { type: 'incrementBy', payload: { value: number } }
    | { type: 'reset' };

export const doReset = (): counterAction => ({
    type: 'reset'
})

export const doIncrementBy = (value: number): counterAction => ({
    type: 'incrementBy',
    payload: { value },
})