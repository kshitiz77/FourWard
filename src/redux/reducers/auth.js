import types from "../types";
import { setUserData, removeUserData, getUserData, signupUser } from "../../utils/utils";
const initialState = {
    userData: {},
}

const userData = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case types.LOGIN:
            let data = action?.payload;
            console.log('data', data)
            return {
                ...state?.userData,
                userData: data
            }
        case types.USER_LOGOUT:
            
            return {
                ...state?.userData,
                userData: undefined
            }
        default: return state;
    }
}

export default userData
