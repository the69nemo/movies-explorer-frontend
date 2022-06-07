import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import Movies from "../Movies/Movies";
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="page">
      {isLoggedIn && <Header />}
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/movies" exact>
          <Movies />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      {isLoggedIn && <Footer />}
    </div>
  );
}

export default App;
