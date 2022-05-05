import types from "../types";
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
                userData: null
            }
        default: return state;
    }
}

export default userData
