import {FilterAction, FilterActionTypes, FilterState} from "../../types/filter";

const initialState: FilterState = {
    filters: [],
    loading: false,
    error: null
}

export const filterReducer = (state = initialState, action: FilterAction): FilterState => {
    switch (action.type) {
        case FilterActionTypes.FETCH_FILTER:
            return {loading: true, error: null, filters: []}
        case FilterActionTypes.FETCH_FILTER_SUCCESS:
            return {loading: false, error: null, filters: action.payload}
        case FilterActionTypes.FETCH_FILTER_ERROR:
            return {loading: false, error: action.payload, filters: []}
        default:
            return state
    }
}