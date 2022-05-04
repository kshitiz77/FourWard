import types from "../types";
import store from "../store";
import { apiPost, setUserData, removeUserData } from "../../utils/utils";
import { SIGNUP, LOGIN, EDIT_PROFILE } from "../../config/urls";

const { dispatch } = store;

export const saveUserData = (data) => {
  setUserData("userData", data);
  dispatch({
    type: types.LOGIN,
    payload: data,
  });
};

export const login = (data) => {
  console.log(data, "the given data");
  if (data?.socialId || data.id) {
    saveUserData(data);
  } else {
    return new Promise((resolve, reject) => {
      apiPost(LOGIN, data)
        .then((res) => {
          setUserData("userData", data)
            .then((response) => {
              saveUserData(res.data);
              resolve(res);
            })
            .catch((err) => {
              reject(err);
            });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
};

export const logout = (data) => {
  removeUserData("userData");
  dispatch({
    type: types.USER_LOGOUT,
    payload: data,
  });
};

export const signup = (data) => {
  return apiPost(SIGNUP, data);
};

export const intro = (data) => {
  dispatch({
    type: types.INTRO,
    payload: data,
  });
};

export const editProfile = (data, header = {}) => {
  console.log(data, "the given data");
  return new Promise((resolve, reject) => {
    apiPost(EDIT_PROFILE, data, header)
      .then((res) => {
        setUserData("userData", res?.data)
          .then((response) => {
            saveUserData(res.data);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
        // resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
