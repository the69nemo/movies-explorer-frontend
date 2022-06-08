import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import Movies from "../Movies/Movies";
import SaveMovies from "../SavedMovies/SavedMovies";
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="page">
      <Header isLoggedIn={isLoggedIn} />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/movies" >
          <Movies />
        </Route>
        <Route path="/saved-movies" >
          <SaveMovies />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
