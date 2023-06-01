export type counterAction =
    | { type: 'incrementBy', payload: { value: number } }
    | { type: 'reset' };