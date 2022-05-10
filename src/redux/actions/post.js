import { POST_SEND } from "../../config/urls";
import { apiPost } from "../../utils/utils";

export const postSend = (data, header = {}) => {
    console.log(data, "the given data");
    return apiPost(POST_SEND, data, header)
  };