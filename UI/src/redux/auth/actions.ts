
import { AppDispatch } from "..";
import { LogoutUserAction } from "./types";
import {
  LoginPayload,
  LOGIN_USER_FAIL,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from "./types";
import { client } from "../../.../../index";
import { LOGIN } from "../../graphql/queries";

export const logout = () => (dispatch: AppDispatch<unknown>) => {
  dispatch({ type: LOGOUT_USER });
};

export const login =
  (loginPayload: LoginPayload) => async (dispatch: AppDispatch<unknown>) => {
    dispatch({ type: LOGIN_USER_LOADING });

    client
      .query({
        query: LOGIN,
        variables: {
          email: loginPayload.email,
          password: loginPayload.password,
        },
      })
      .then((result) =>
        dispatch({ type: LOGIN_USER_SUCCESS, payload: result.data })
      )
      .catch(() => {
        dispatch({ type: LOGIN_USER_FAIL });
      });
  };
