import * as filterTypes from "./filter.types"

export enum GenderValue {
    'both',
    'male',
    'female'
}

export interface FilterState {
    name: string
    age: {
        minAge: number
        maxAge: number
    },
    gender: number
}
export interface Action {
    type: string;
    payload?: any;
}

export const initialState: FilterState = {
    name: '',
    age: {
        minAge: 0,
        maxAge: 100
    },
    gender: GenderValue.both
}

function filterReducer(state = initialState, action: Action): FilterState {
    switch (action.type) {
        case filterTypes.SET_DEFAULT_VALUES:
            return {
                ...initialState
            }
        case filterTypes.SET_NAME:
            return {
                ...state,
                ...action.payload
            }
        case filterTypes.SET_MIN_AGE:
            return {
                ...state,
                age: {
                    ...state.age,
                    ...action.payload.age
                }
            }
        case filterTypes.SET_MAX_AGE:
            return {
                ...state,
                age: {
                    ...state.age,
                    ...action.payload.age
                }
            }
        case filterTypes.SET_GENDER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default filterReducer