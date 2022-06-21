export const LOGIN_USER_LOADING = "LOGIN_USER_LOADING";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGOUT_USER = "LOGOUT_USER";

export type LoginUserLoadingAction = {
  type: typeof LOGIN_USER_LOADING;
};

export type LoginUserFailAction = {
  type: typeof LOGIN_USER_FAIL;
};

export type LoginUserSuccessAction = {
  type: typeof LOGIN_USER_SUCCESS;
  payload: {
    login: CurrentUser;
  };
};

export type LogoutUserAction = {
  type: typeof LOGOUT_USER;
};

export type LoginState = {
  isAuthenticated: boolean;
  loading: boolean;
  currentUser: CurrentUser;
};

export type CurrentUser = {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginUserDispatchTypes =
  | LoginUserLoadingAction
  | LoginUserFailAction
  | LoginUserSuccessAction
  | LogoutUserAction;
