export type counterAction =
    | { type: 'incrementBy', payload: { value: number } }
    | { type: 'reset' };

export const doReset = (): counterAction => ({
    type: 'reset'
})