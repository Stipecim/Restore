export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export interface CounterState {
    data: number;
    title: string;
}

const initialState: CounterState = {
    data: 42,
    title: "YARC (yet another redux counter)"
}

export function increment(ammount = 1) {
    return {
        type:INCREMENT_COUNTER,
        payload: ammount
    }
}

export function decrement(ammount = 1) {
    return {
        type:DECREMENT_COUNTER,
        payload: ammount
    }
}
export default function counterReducer(state = initialState, action: any) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                data: state.data + action.payload
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                data: state.data - action.payload
            }

        default:
            return state;
    }
   
}