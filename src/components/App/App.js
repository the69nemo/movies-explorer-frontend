import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="page">
      {isLoggedIn && <Header />}
      <Switch>
        <Route path="/" exact>
          <Main />
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
