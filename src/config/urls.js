export const API_BASE_URL = "http://192.168.100.101:8002/api";

export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;


export const SIGNUP = getApiUrl("/signup");
export const LOGIN = getApiUrl("/userlogin");
export const USER_LOGIN = getApiUrl("/verify_otp");
export const CHANGE_PASSWORD = getApiUrl("/change_password")
export const CHECK_SOCIAL_ID = getApiUrl("/check_social_id")
export const EDIT_PROFILE = getApiUrl("/edit_profile")
export const FORGOT_PASSWORD = getApiUrl("/forgot_password")
export const OTP = getApiUrl("/verify_otp")
export const POST_SEND = getApiUrl("/post_send")
export const IMG_UPLOAD = getApiUrl("/img_upload")
export const GET_POST = getApiUrl("/posts")
export const LIKE_POST = getApiUrl("/like-post")
export const COMMENTS= getApiUrl('/comment-post')
export const GET_COMMENTS= getApiUrl('/comment-get')







