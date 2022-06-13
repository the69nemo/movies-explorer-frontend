import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import PageNotFound from "../PageNotFound/PageNotFound";
import Movies from "../Movies/Movies";
import SaveMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div className="page">
      <Switch>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route path="/" exact>
          <Main
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route path="/movies">
          <Movies
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route path="/saved-movies">
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
