import userData from "./auth";
import introReducer from "./intro";

import { combineReducers } from "redux";

const rootReducers = combineReducers({
    userData,
    introReducer
})

export default rootReducers