import {
  AnyAction,
  Store,
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { Persistor, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { authReducer, initialState as initialAuthState } from "~/redux/auth";
import { productReducer, initialProductState } from "~/redux/product";

const handleAuthorizationToken = (email: string): number | undefined => {
  if (!email) {
    return;
  }
};

const persistConfig = {
  key: "root",
  storage,
};

export const appReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
});

const rootInitialState = {
  auth: initialAuthState,
  products: initialProductState,
};

type RootState = ReturnType<typeof appReducer>;
let authInterceptor: number | undefined;
export const rootReducer = (
  state: RootState | undefined,
  action: AnyAction
) => {
  if (
    action.type === "persist/REHYDRATE" &&
    action.payload &&
    action.payload.auth
  ) {
    authInterceptor = handleAuthorizationToken(action.payload.auth.email);
  }

  if (action.type === "persist/REHYDRATE") {
    return appReducer(
      {
        ...(state || rootInitialState),
        products: { ...initialProductState },
      },
      action
    );
  }

  if (action.type === "LOGIN_USER_SUCCESS") {
    authInterceptor = handleAuthorizationToken(action.payload.email);
  }

  if (!state || action.type === "LOGOUT_USER") {
    return appReducer(rootInitialState, action);
  }

  return appReducer(state, action);
};

export const configureStore = (): {
  store: Store<RootState>;
  persistor: Persistor;
} => {
  const persistedReducer = persistReducer<RootState>(
    persistConfig,
    rootReducer
  );

  const store = createStore(persistedReducer, applyMiddleware(thunk));

  const persistor = persistStore(store);

  return { store, persistor };
};
