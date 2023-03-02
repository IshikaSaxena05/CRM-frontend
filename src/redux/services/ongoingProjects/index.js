import { Api } from "../../../components/Config/request";

export const requestProjectList = async (data) => {
  console.log(data);
  return Api.PostRequest("/api/ongoingprojects/list", data);
};
export const requestcloseProject = async (data) => {
    console.log(data);
    return Api.PostRequest("/api/completedprojects/status", data);
  };
const ProjectApi = {
    requestProjectList,
    requestcloseProject
};
export default ProjectApi;
