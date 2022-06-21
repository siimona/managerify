import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import { Navbar } from "./components/Navbar";
import { RootState, useAppDispatch, useAppStateSelector } from "./redux";
import { LoginState } from "./redux/auth/types";
import { getProducts } from "./redux/product/actions";
import { Home } from "./scenes/Home";
import { Login } from "./scenes/Login";
import { Logout } from "./scenes/Logout";
import { ProductPage } from "./scenes/Product";
import { Profile } from "./scenes/Profile";
import { Statistics } from "./scenes/Statistics";

function App() {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppStateSelector<LoginState>(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getProducts()).then(() => {});
    }
  }, [dispatch, isAuthenticated]);

  return (
    <>
      {!isAuthenticated ? (
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Redirect to="/login" />
          </Route>
          <Route exact path={["/", "/profile"]}>
            <Redirect to="/login" />
          </Route>
          <Route path="/login" exact={true} component={Login} />
        </Switch>
      ) : (
        <>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path={["/", "/home"]} exact={true}>
              <Home />
            </Route>
            <Route path={["/", "/profile"]} exact={true}>
              <Profile />
            </Route>
            <Route path={["/", "/statistics"]} exact={true}>
              <Statistics />
            </Route>
            <Route path={["/", "/product/:productId"]} exact={true}>
              <ProductPage />
            </Route>
            <Route path="/logout" exact={true} component={Logout} />
            <Route exact path={["/", "/login"]}>
              <Redirect to="/" />
            </Route>
          </Switch>
        </>
      )}
    </>
  );
}

export default App;
