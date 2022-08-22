import {combineReducers} from 'redux'
import {catReducer} from "./catReducer";
import {filterReducer} from "./filterReducer";

export const rootReducer = combineReducers({
    cat: catReducer,
    filter: filterReducer
})

export type RootState = ReturnType<typeof rootReducer>