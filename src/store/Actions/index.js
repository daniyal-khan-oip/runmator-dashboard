import axios from "axios";
import { apiUrl } from "configuration/config";
import * as types from "./actionType";

// export const AuthLoginAction = (email, password) => async (dispatch) => {
//   try {
//     const response = await axios.post(
//       `https://online-books-app.herokuapp.com/api/users/login`,
//       {
//         email: email,
//         password: password,
//       }
//     );
//     console.log(response.data.user.token);
//     if (response.data.success) {
//       localStorage.setItem("token", response.data.user.token);
//       dispatch({
//         type: types.AUTH_LOGGED_IN,
//         payload: {
//           token: response.data.user.token,
//           userData: response.data.user,
//         },
//       });
//     }
//   } catch (e) {
//     dispatch({
//       type: types.AUTH_LOGGED_IN_ERROR,
//       payload: response.data,
//     });
//     console.log(e);
//   }
// };

export const AuthLoginAction = (email, password) => async (dispatch) => {
  const data = {
    email: email,
    password: password,
    roll_id:1
  };

  try {
    const response = await axios.post(`${apiUrl}/login`, data);
    console.log(response.data.data);
    if (response.data.status) {
      localStorage.setItem("token", response.data.data);
      dispatch({
        type: types.AUTH_LOGGED_IN,
        payload: {
          token: response.data.data,
        },
      });
    }
  } catch (e) {
    console.log(e.response.data);
    // dispatch({
    //   type: types.AUTH_LOGGED_IN_ERROR,
    //   payload: e.response.data.message,
    // });
  }
};

export const getAllUsers = (token) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer 17|XWFo6y5XajK8RslkjD3SOtDXiLk7J6O9rXIEOtFF`,
    };
    const response = await axios.get(`${apiUrl}/admin/users`, {
      headers,
    });
    if (response.data.status) {
      dispatch({
        type: types.GET_ALL_USERS,
        payload: response.data.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deactivateUser = (token, id) => async (dispatch) => {
  const headers = {
    Authorization: `Bearer 1|1LhlQ5V0qnkAogHuEG70UAYK2eiUBUU6HBfhicRu`,
  };
  try {
    const response = await axios.get(
      `${apiUrl}/admin/user/markAsDeactive/${id}`,
      {
        headers,
      }
    );
    if (response.data.status) {
      console.log("Deactivated");
    }
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const activateUser = (token, id) => async (dispatch) => {
  const headers = {
    Authorization: `Bearer 1|1LhlQ5V0qnkAogHuEG70UAYK2eiUBUU6HBfhicRu`,
  };
  try {
    const response = await axios.get(
      `${apiUrl}/admin/user/markAsActive/${id}`,
      {
        headers,
      }
    );
    if (response.data.status) {
      console.log("Activated");
    }
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const getAllServices = (token) => async (dispatch) => {
  console.log("token", token);
  try {
    const headers = {
      Authorization: `Bearer 19|nsGzIwL4WKkVbs3gEZGa7jOIFZaq3nJJkzfgsG17`,
      Accept: "application/json",
    };
    const response = await axios.get(`${apiUrl}/admin/services`, {
      headers,
    });
    if (response.data.status) {
      dispatch({
        type: types.GET_ALL_SERVICES,
        payload: response.data.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const AuthLogoutAction = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: types.AUTH_LOGGED_OUT,
    payload: {
      token: "",
      userData: "",
    },
  });
};

export const deactivateService = (token, id) => async (dispatch) => {
  const headers = {
    Authorization: `Bearer 17|XWFo6y5XajK8RslkjD3SOtDXiLk7J6O9rXIEOtFF`,
  };
  try {
    const response = await axios.get(
      `${apiUrl}/admin/services/markAsDeactive/${id}`,
      {
        headers,
      }
    );
    if (response.data.status) {
      console.log("Deactivated");
    }
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const activateService = (token, id) => async (dispatch) => {
  const headers = {
    Authorization: `Bearer 17|XWFo6y5XajK8RslkjD3SOtDXiLk7J6O9rXIEOtFF`,
  };
  try {
    const response = await axios.get(
      `${apiUrl}/admin/services/markAsActive/${id}`,
      {
        headers,
      }
    );
    if (response.data.status) {
      console.log("Activated");
    }
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const updateService = (token, data, id) => async (dispatch) => {
  for (var value of data.values()) {
    console.log(value);
  }
  const headers = {
    Authorization: `Bearer 19|nsGzIwL4WKkVbs3gEZGa7jOIFZaq3nJJkzfgsG17`,
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  };

  try {
    const response = await axios.post(
      `${apiUrl}/admin/services/update/${id}`,
      data,
      {
        headers,
      }
    );
    if (response.data.status) {
      console.log("Updated Success");
    }
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const addService = (token, data, id) => async (dispatch) => {
  for (var value of data.values()) {
    console.log(value);
  }
  const headers = {
    Authorization: `Bearer 19|nsGzIwL4WKkVbs3gEZGa7jOIFZaq3nJJkzfgsG17`,
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  };

  try {
    const response = await axios.post(`${apiUrl}/admin/services/store`, data, {
      headers,
    });
    if (response.data.status) {
      console.log("Added Success");
    }
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const getDashboardCounts = (token) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer 19|nsGzIwL4WKkVbs3gEZGa7jOIFZaq3nJJkzfgsG17`,
    };
    const response = await axios.get(`${apiUrl}/admin/services/total`, {
      headers,
    });
    if (response.data.status) {
      dispatch({
        type: types.GET_DASHBOARD_COUNTS,
        payload: response.data.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
