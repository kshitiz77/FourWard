import types from "../types";
import { setUserData } from "../../utils/utils";
const initialState = true


const introReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INTRO:
        const data = action.payload
      console.log("introData", action.payload);
      setUserData("userIntro", data);
      return state = data;

    default:
      return state;
  }
};

export default introReducer;
