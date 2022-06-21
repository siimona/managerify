import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { persistor, useAppDispatch } from "~/redux";
import { logout } from "~/redux/auth/actions";

export const Logout = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    persistor.purge().then(() => {
      dispatch(logout());
      history.push("/login");
    });
  }, [dispatch, history]);

  return <></>;
};
