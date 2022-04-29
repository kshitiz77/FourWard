import userStatus from "./auth";
import introReducer from "./intro";

import { combineReducers } from "redux";

const rootReducers = combineReducers({
    userStatus,
    introReducer
})

export default rootReducers