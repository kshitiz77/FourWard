import types from "../types";
import { setItem } from "../../utils/utils";
const initialState = {
  appIntroData: true,
};

const introReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INTRO:
      const data = action.payload;
      console.log("introData", action.payload);
      setItem("appIntroData", data);
      return {
        ...state.appIntroData,
        appIntroData: data,
      };

    default:
      return state;
  }
};

export default introReducer;
