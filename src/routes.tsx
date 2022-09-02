import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Pokedex } from "./pages/Pokedex/Pokedex";
import { Pokemon } from "./pages/Pokemon/Pokemon";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/pokemon/:name">
          <Pokemon />
        </Route>
        <Route path="/pokedex">
          <Pokedex />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
