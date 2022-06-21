import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { persistor, store } from "~/redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  DefaultOptions,
} from "@apollo/client";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}
export const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledEngineProvider injectFirst>
          <CssBaseline>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CssBaseline>
        </StyledEngineProvider>
      </PersistGate>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

reportWebVitals();
