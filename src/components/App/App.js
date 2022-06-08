import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main"
import PageNotFound from "../PageNotFound/PageNotFound";
import Movies from "../Movies/Movies";
import SaveMovies from "../SavedMovies/SavedMovies";
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="page">
      <Switch>
        <Route path="/" exact>
          <Main
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route path="/movies" >
          <Movies
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route path="/saved-movies" >
          <SaveMovies
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
