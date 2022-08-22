import {CatAction, CatActionTypes, CatState} from "../../types/cat";

const initialState: CatState = {
    cats: [],
    loading: false,
    error: null
}

export const catReducer = (state = initialState, action: CatAction): CatState => {
    switch (action.type) {
        case CatActionTypes.FETCH_CATS:
            return {loading: true, error: null, cats: []}
        case CatActionTypes.FETCH_CATS_SUCCESS:
            return {loading: false, error: null, cats: action.payload}
        case CatActionTypes.FETCH_CATS_ERROR:
            return {loading: false, error: action.payload, cats: []}
        default:
            return state
    }
}