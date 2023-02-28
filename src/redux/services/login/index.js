import { Api } from "../../../components/Config/request";

export const requestLogin = async (data) => {
  return Api.apiRequest("/api/auth/login", data);
};

const LoginApi = {
  requestLogin,
};
export default LoginApi;
