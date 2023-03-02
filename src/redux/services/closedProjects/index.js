import { Api } from "../../../components/Config/request";

export const requestProjectList = async (data) => {
  console.log(data);
  return Api.PostRequest("/api/completedprojects/list", data);
};
export const requestreopenProject = async (data) => {
  console.log(data);
  return Api.PostRequest("/api/completedprojects/status", data);
};
export const requestviewProject = async (data) => {
  console.log(data);
  return Api.PostRequest("/api/completedprojects/view", data);
};
export const requestMilestone = async (data) => {
  console.log(data);
  return Api.PostRequest("/api/milestone/list", data);
};
const ProjectApi = {
    requestProjectList,
    requestreopenProject,
    requestviewProject,
    requestMilestone
};
export default ProjectApi;
