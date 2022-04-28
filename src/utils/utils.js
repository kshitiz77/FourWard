import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import store from '../redux/store';
import types from '../redux/types';
// set user details function

const { dispatch, getState } = store;

export async function getHeaders() {
	let loginUser = await AsyncStorage.getItem('loginUser');
	if (loginUser) {
		loginUser = JSON.parse(loginUser);
		//console.log(userData.accessToken, 'header')
		return {
			authorization: `${loginUser?.access_token}`,
		};
	}
	return {};
}


export async function apiReq(
	endPoint,
	data,
	method,
	headers,
	requestOptions = {}
) {
console.log("api hit",endPoint)
console.log(data,"data")
	return new Promise(async (res, rej) => {
		const getTokenHeader = await getHeaders();
		headers = {
			...getTokenHeader,
			...headers
		};

		if (method === 'get' || method === 'delete') {
			data = {
				...requestOptions,
				...data,
				headers
			};
		}

		axios[method](endPoint, data, { headers })
			.then(result => {

				const { data } = result;

				if (data.status === false) {
					return rej(data);
				}

				return res(data);
			})
			.catch(error => {
				console.log(error)
				console.log(error && error.response, 'the error respne')
				if (error && error.response && error.response.status === 401) {
					clearUserData();
					clearLoginUser();	
					// NavigationService.resetNavigation();
					//NavigationService.navigate('loginUsingEmailScreen');
					dispatch({
						type: types.CLEAR_REDUX_STATE,
						payload: {}
					});
					dispatch({
						type: types.NO_INTERNET,
						payload: { internetConnection: true },
					});


				}
				if (error && error.response && error.response.data) {
					if (!error.response.data.message) {
						return rej({ ...error.response.data, msg: error.response.data.message || "Network Error" })
					}
					return rej(error.response.data)
				} else {
					return rej({ message: "Network Error", msg: "Network Error" });
				}
				return rej(error);
			});
	});
}

export function apiPost(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
	return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'put', headers);
}
export const setUserData = (key, data) => {
  console.log(data)
  data = JSON.stringify(data);
  return AsyncStorage.setItem(key, data);
}

// remove user details function
export const removeUserData = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (error) {
    console.log(error)
  }
}

// get user details function
export const getUserData = async () => {
  try {
    const userData = await AsyncStorage.getItem('userData')
    return userData != null ? JSON.parse(userData) : null;
  } catch (e) {
    console.log("user_data get error")
  }
}

export function clearAsyncStorate(key) {
	return AsyncStorage.clear();
}



// set userTodolist details Function




