import {combineReducers} from 'redux'
import {categoryReducer} from "./categoryReducer";
import {filterReducer} from "./filterReducer";

export const rootReducer = combineReducers({
    category: categoryReducer,
    filter: filterReducer
})

export type RootState = ReturnType<typeof rootReducer>