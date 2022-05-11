import types from "../types";
import store from "../store";
import { apiPost, setUserData, removeUserData } from "../../utils/utils";
import { SIGNUP, LOGIN, EDIT_PROFILE, FORGOT_PASSWORD, CHANGE_PASSWORD, OTP } from "../../config/urls";

const { dispatch } = store;

// Save User Data Details ====>>
export const saveUserData = (data) => {
  setUserData("userData", data);
  dispatch({
    type: types.LOGIN,
    payload: data,
  });
};

// user login through api(mobile number) ====> 
export const login = (data) => {
  console.log(data, "the given data");
    return new Promise((resolve, reject) => {
      apiPost(LOGIN, data)
        .then((res) => {
              saveUserData(res.data);
              resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
};

// user logout ==>
export const logout = () => {
  removeUserData("userData");
  dispatch({
    type: types.USER_LOGOUT,
  });
};


// user signup ==>>
export const signup = (data) => {
  return apiPost(SIGNUP, data);
};


// app intro 
export const intro = (data) => {
  dispatch({
    type: types.INTRO,
    payload: data,
  });
};

// user edit profile  ==>
export const editProfile = (data, header = {}) => {
  console.log(data, "the given data");
  return new Promise((resolve, reject) => {
    apiPost(EDIT_PROFILE, data, header)
      .then((res) => {
            saveUserData(res.data);
            resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Forgot Password ==> 
export const forgotPassword = (data) => {
  return apiPost(FORGOT_PASSWORD, data);
};

// Change Password ==>
export const changePassword = (data) => {
  return apiPost(CHANGE_PASSWORD, data);
};

// getOTP ==>
export const getOtp = (data) => {
  return apiPost(OTP, data);
};


