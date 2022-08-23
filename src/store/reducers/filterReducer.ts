import {FetchCatAction, CatActionTypes, CatState} from "../../types/filter";

const initialState: CatState = {
    cats: [],
    loading: false,
    error: null,
    limit: 10
}

export const filterReducer = (state = initialState, action: FetchCatAction): CatState => {
    switch (action.type) {
        case CatActionTypes.FETCH_CATS:
            return {...state, loading: true}
        case CatActionTypes.FETCH_CATS_SUCCESS:
            return {...state, loading: false, cats: action.payload}
        case CatActionTypes.FETCH_CATS_ERROR:
            return {...state, loading: false, error: action.payload}
        case CatActionTypes.SET_CATEGORY:
            return {...state, category: action.payload}
        case CatActionTypes.SET_LIMIT:
            return {...state, limit: action.payload}
        default:
            return state
    }
}