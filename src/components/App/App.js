import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import PageNotFound from "../PageNotFound/PageNotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import { mainApi } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";
import * as auth from "../../utils/auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const history = useHistory();
  const token = localStorage.getItem("jwt");

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loadedAllMovies, setLoadedAllMovies] = useState(
    JSON.parse(localStorage.getItem("loadedMovies")) || []
  );

  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getUserInfo(token)
        .then((user) => setCurrentUser(user))
        .catch((err) => `Ошибка получения данных пользователя: ${err}`);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (token) {
      auth
        .getToken(token)
        .then(() => {
          setIsLoggedIn(true);
          history.push("/");
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      moviesApi
        .getAllMovies()
        .then((movies) => {
          setLoadedAllMovies(movies);
          localStorage.setItem("loadedMovies", JSON.stringify(movies));
        })
        .catch((err) => console.log(err));
    }
  }, [isLoggedIn]);

  const handleRegister = (name, password, email) => {
    auth
      .register(name, password, email)
      .then(() => {
        history.push("/signin");
      })
      .catch((err) => {
        return err === 400
          ? console.log("Ошибка 400 - некорректно заполнено одно из полей")
          : console.log(`Ошибка ${err}`);
      });
  };

  const handleAutorize = (password, email) => {
    auth
      .authorize(password, email)
      .then((data) => {
        auth.getToken(data.token).then((res) => {
          setIsLoggedIn(true);
          history.push("/movies");
        });
      })
      .catch((err) => {
        switch (err) {
          case 400:
            console.log("Ошибка 400 - не передано одно из полей");
            break;
          case 401:
            console.log("Ошибка 401 - пользователь с email не найден ");
            break;
          default:
            console.log(`Ошибка ${err}`);
        }
      });
  };

  const handleUpdateUser = (user) => {
    mainApi
      .editProfile(user, token)
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => `Ошибка редактирования данных профиля: ${err}`);
  };

  const signOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    history.push("/");
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route path="/" exact>
            <Main isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/signup">
            <Register onAuth={handleRegister} />
          </Route>
          <Route path="/signin">
            <Login onAuth={handleAutorize} />
          </Route>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            isLoggedIn={isLoggedIn}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            isLoggedIn={isLoggedIn}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            isLoggedIn={isLoggedIn}
            onUpdateUser={handleUpdateUser}
            signOut={signOut}
          />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
