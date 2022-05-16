import { POST_SEND, IMG_UPLOAD, GET_POST, LIKE_POST } from "../../config/urls";
import { apiPost, apiGet } from "../../utils/utils";

export const postSend = (data, header = {}) => {
  console.log(data, "the given data");
  return apiPost(POST_SEND, data, header);
};

export const imgUpload = (data, header = {}) => {
  console.log(data, "the given data");
  return apiPost(IMG_UPLOAD, data, header);
};

export const getPost = (query="") => {
  return apiGet(GET_POST+query);
};

export const likePost = (query="") => {
  console.log(query)
  return apiPost(LIKE_POST+query);
};