import React from 'react';
import TasksApi from "../../services/Tasks/Tasks"
// import { LOGIN_ADMIN } from '../actionCreator';

// export const LogInAdmin = () => {
//     return {
//       type: LOGIN_ADMIN,
//     };
//   };

  export const getTasksList = (data) => async (dispatch) => {
    try {
      let response = await TasksApi.requestLogin(data);
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