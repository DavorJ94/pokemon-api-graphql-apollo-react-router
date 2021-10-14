import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Homepage from "./pages/Homepage";
import AboutEachPokemon from "./pages/AboutEachPokemon";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MissingPage from "./components/404";

function App() {
  const client = new ApolloClient({
    uri: "https://set-buck-38.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers: {
      "x-hasura-admin-secret":
        "gO4MGR2VQNnEaizYTEV1t7VdbdR60j5T8Je8DK0kdxlVmoOOyhdN1A7338fxa7Ww",
    },
  });

  return (
    <Router>
      <Header />
      <ApolloProvider client={client}>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/about/:id">
            <AboutEachPokemon />
          </Route>
          <Route path="*" component={MissingPage} />
        </Switch>
      </ApolloProvider>
      <Footer />
    </Router>
  );
}

export default App;
