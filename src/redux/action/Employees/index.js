import React from 'react';
import EmployeesApi from "../../services/Employees/index"
import { LOGIN_ADMIN } from '../actionCreator';

export const LogInAdmin = () => {
    return {
      type: LOGIN_ADMIN,
    };
  };

  export const employeesList = (data) => async (dispatch) => {
    try {
      let response = await EmployeesApi.requestemployees(data);
      if (response?.data) {
        // dispatch(LogInAdmin(response?.data));
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
  export const getemployeedata = (data) => async (dispatch) => {
    try {
      let response = await EmployeesApi.requestgetemployeedata(data);
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
  export const saveEmployee = (data) => async (dispatch) => {
    try {
      let response = await EmployeesApi.requestsaveEmployee(data);
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
  export const employeesDetails = (data) => async (dispatch) => {
    try {
      let response = await EmployeesApi.requestemployeesDetails(data);
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
  export const taskList = (data) => async (dispatch) => {
    try {
      let response = await EmployeesApi.requestTaskList(data);
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
  export const Addtask = (data) => async (dispatch) => {
    try {
      let response = await EmployeesApi.requestAddtask(data);
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