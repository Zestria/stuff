import noteReducer from './ar-note'
import { combineReducers } from "redux";

const allReducers = combineReducers({
    notes: noteReducer
})

export default allReducers