import { Api } from "../../../config/request";

export const requestLogin = async (data) => {
  return Api.PostRequest("/user/login", data);
};

const LoginApi = {
  requestLogin,
};
export default LoginApi;
