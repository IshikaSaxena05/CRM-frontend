import { Api } from "../../../components/Config/request";

export const requestemployees = async (data) => {
  console.log(data);
  return Api.PostRequest("/api/users/employee/list", data);
};
export const requestemployeesDetails = async (data) => {
  console.log(data);
  return Api.PostRequest("/api/users/employee", data);
};
export const requestAddtask = async (data) => {
  console.log(data);
  return Api.PostRequest("/api/tasks/addtask", data);
};
export const requestTaskList = async (data) => {
  console.log(data);
  return Api.PostRequest("/api/tasks/list", data);
};
export const requestgetemployeedata = async (data) => {
  console.log(data);
  return Api.PostRequest("", data);
};
export const requestsaveEmployee = async (data) => {
  console.log(data);
  return Api.PostRequest("/api/users/createuser", data);
};
export const requestdeleteTask = async (data) => {
  console.log(data);
  return Api.PostRequest("/api/tasks/delete", data);
};
export const requestEditTask = async (data) => {
  console.log(data);
  return Api.PostRequest("/api/tasks/getTask", data);
};
const EmployeesApi = {
    requestemployees,
    requestemployeesDetails,
    requestTaskList,
    requestAddtask,
    requestgetemployeedata,
    requestsaveEmployee,
    requestdeleteTask,
    requestEditTask
};
export default EmployeesApi;
