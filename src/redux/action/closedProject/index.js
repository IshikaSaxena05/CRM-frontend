import React from 'react';
import EmployeesApi from "../../services/Employees/index"
import ProjectApi from "../../services/closedProjects/index"
import { LOGIN_ADMIN } from '../actionCreator';

export const LogInAdmin = () => {
    return {
      type: LOGIN_ADMIN,
    };
  };

  export const ProjectList = (data) => async (dispatch) => {
    try {
      let response = await ProjectApi.requestProjectList(data);
      if (response?.data) {
        dispatch(LogInAdmin(response?.data));
        // toast.success(response?.data?.message)
        // storage.set.authToken(response?.data?.token)
        return response;
      } else {
        // response?.data?.errors?.map((item) => {
        //   return toast.error(item);
        // });
      }
    } catch (err) {
    }
  };
  export const reopenProject = (data) => async (dispatch) => {
    try {
      let response = await ProjectApi.requestreopenProject(data);
      if (response?.data) {
        dispatch(LogInAdmin(response?.data));
        // toast.success(response?.data?.message)
        // storage.set.authToken(response?.data?.token)
        return response;
      } else {
        // response?.data?.errors?.map((item) => {
        //   return toast.error(item);
        // });
      }
    } catch (err) {
    }
  };
  export const viewProject = (data) => async (dispatch) => {
    try {
      let response = await ProjectApi.requestviewProject(data);
      if (response?.data) {
        dispatch(LogInAdmin(response?.data));
        // toast.success(response?.data?.message)
        // storage.set.authToken(response?.data?.token)
        return response;
      } else {
        // response?.data?.errors?.map((item) => {
        //   return toast.error(item);
        // });
      }
    } catch (err) {
    }
  };
  export const getMilestone = (data) => async (dispatch) => {
    try {
      let response = await ProjectApi.requestMilestone(data);
      if (response?.data) {
        dispatch(LogInAdmin(response?.data));
        // toast.success(response?.data?.message)
        // storage.set.authToken(response?.data?.token)
        return response;
      } else {
        // response?.data?.errors?.map((item) => {
        //   return toast.error(item);
        // });
      }
    } catch (err) {
    }
  };