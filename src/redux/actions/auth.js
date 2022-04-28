import types from "../types";
import store from "../store";
import { apiPost } from "../../utils/utils";
import {SIGNUP, LOGIN} from '../../config/urls'

const { dispatch } = store

export const saveUserData = (data) =>{
    dispatch({
        type: types.LOGIN,
        payload: data
    })
}

export const login = (data) =>{
    console.log(data, 'the given data')
  return new Promise((resolve, reject) => {
    apiPost(LOGIN, data)
      .then((res) => {
          console.log("LOgin res",res.data)
        saveUserData(res.data)
        resolve(res)
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export const logout = (data) =>{
    dispatch({
        type: types.USER_LOGOUT,
        payload: data
    })
}

export const signup = (data) =>{
    return apiPost(SIGNUP, data);
}
