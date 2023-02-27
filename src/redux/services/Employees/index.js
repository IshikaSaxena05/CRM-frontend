import { Api } from "../../../components/Config/request";

export const requestemployees = async (data) => {
  return Api.apiRequest("/api/users", data);
};

const EmployeesApi = {
    requestemployees,
};
export default EmployeesApi;
