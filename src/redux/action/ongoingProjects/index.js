import React from 'react';
import EmployeesApi from "../../services/Employees/index"
import ProjectApi from "../../services/ongoingProjects/index"
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
  export const closeProject = (data) => async (dispatch) => {
    try {
      let response = await ProjectApi.requestcloseProject(data);
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
  export const deleteTask = (data) => async (dispatch) => {
    try {
      let response = await EmployeesApi.requestdeleteTask(data);
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
  export const EditTask = (data) => async (dispatch) => {
    try {
      let response = await EmployeesApi.requestEditTask(data);
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