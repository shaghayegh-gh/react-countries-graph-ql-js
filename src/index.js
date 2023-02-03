import { render } from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </ApolloProvider>,
  document.getElementById("root")
);
