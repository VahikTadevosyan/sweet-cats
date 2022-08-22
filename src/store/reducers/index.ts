import {combineReducers} from 'redux'
import {catReducer} from "./catReducer";

export const rootReducer = combineReducers({
    cat: catReducer
})

export type RootState = ReturnType<typeof rootReducer>