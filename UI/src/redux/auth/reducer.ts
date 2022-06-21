import {
  LOGIN_USER_FAIL,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  LoginState,
  LoginUserDispatchTypes,
} from "./types";

export const initialState: LoginState = {
  loading: false,
  isAuthenticated: false,
  currentUser: {
    id: "",
    email: "",
    name: "",
    role: "",
    phone: "",
  },
};

export const authReducer = (
  state: LoginState = initialState,
  action: LoginUserDispatchTypes
): LoginState => {
  switch (action.type) {
    case LOGIN_USER_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case LOGIN_USER_LOADING: {
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    }
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        currentUser: { ...action.payload.login },
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
      };
    }
    default:
      return state;
  }
};
