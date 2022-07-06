import {
  AUTH_LOGGED_IN,
  AUTH_LOGGED_OUT,
  AUTH_LOGGED_IN_ERROR,
  GET_ALL_USERS,
  GET_ALL_SERVICES,
  GET_DASHBOARD_COUNTS,
} from "../Actions/actionType";

const initialStateOfAuth = {
  token: null,
  userData: null,
  users: [],
  dashboardCounts: null,
  services: [],
};

export function userAuthReducer(state = initialStateOfAuth, action) {
  switch (action.type) {
    case AUTH_LOGGED_IN:
      return {
        ...state,
        ...action.payload,
      };

    case AUTH_LOGGED_OUT:
      return {
        ...state,
        ...action.payload,
      };

    case AUTH_LOGGED_IN_ERROR:
      return { ...state, ...action.payload };

    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case GET_ALL_SERVICES:
      return {
        ...state,
        services: action.payload,
      };

    case GET_DASHBOARD_COUNTS:
      return {
        ...state,
        dashboardCounts: action.payload,
      };
    default:
      return state;
  }
}
