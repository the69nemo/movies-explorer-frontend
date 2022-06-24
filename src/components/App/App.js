import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const token = localStorage.getItem("jwt");

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [allMovies, setAllMovies] = useState(
    JSON.parse(localStorage.getItem("loadedMovies")) || []
  );
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(
    JSON.parse(localStorage.getItem("filteredMovies")) || []
  );
  const [searchKeyword, setSearchKeyword] = useState(
    localStorage.getItem("searchKeyword") || ""
  );

  const [profileInfoMessage, setProfileInfoMessage] = useState("");
  const [registerInfoMessage, setRegisterInfoMessage] = useState("");
  const [loginInfoMessage, setLoginleInfoMessage] = useState("");

  useEffect(() => {
    if (token) {
      auth
        .getToken(token)
        .then(() => {
          setIsLoggedIn(true);
          history.push(location.pathname);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getUserInfo(token)
        .then((user) => setCurrentUser(user))
        .catch((err) => {
          console.log(`Ошибка получения данных пользователя: ${err}`);
        });

      mainApi
        .getMovies(token)
        .then((res) => {
          setSavedMovies(res);
          localStorage.setItem("savedMovies", JSON.stringify(res));
        })
        .catch((err) => {
          console.log(err);
        });

      if (localStorage.filteredMovies) {
        setMovies(filteredMovies);
      }
    }
  }, [isLoggedIn, filteredMovies]);

  const handleRegister = ({ name, password, email }) => {
    auth
      .register(name, password, email)
      .then((res) => {
        console.log(res);
        if (res) {
          setTimeout(() => handleAutorize({ password, email }), 1000);
          setRegisterInfoMessage("Регистрация прошла успешно");
        }
      })
      .catch((err) => {
        console.log(err);
        switch (err) {
          case 400:
            setRegisterInfoMessage("Некорректно заполнено одно из полей");
            break;
          case 409:
            setRegisterInfoMessage(
              "Пользователь с такой почтой уже зарегистрирован"
            );
            break;
          default:
            setRegisterInfoMessage("Что-то пошло не так ¯_(ツ)_/¯");
        }
      });
  };

  const handleAutorize = ({ password, email }) => {
    auth
      .authorize(password, email)
      .then((data) => {
        auth.getToken(data.token).then((res) => {
          console.log(res);
          if (res) {
            setIsLoggedIn(true);
            setTimeout(() => history.push("/movies"), 1000);
            setLoginleInfoMessage("Авторизация прошла успешно");
          }
        });
      })
      .catch((err) => {
        switch (err) {
          case 400:
            setLoginleInfoMessage("Вы ввели неправильный email или пароль");
            break;
          case 401:
            setLoginleInfoMessage(
              "При авторизации произошла ошибка. Токен не передан или передан не в том формате."
            );
            break;
          default:
            setLoginleInfoMessage(
              "При авторизации произошла ошибка. Переданный токен некорректен."
            );
        }
      });
  };

  const handleUpdateUser = (user) => {
    mainApi
      .editProfile(user, token)
      .then((userInfo) => {
        setProfileInfoMessage("Данные пользователя обновлеы успешно");
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        console.log(`Ошибка редактирования данных профиля: ${err}`);
      });
  };

  function searchMovies(movie, name) {
    return movie.filter((m) =>
      m.nameRU.toLowerCase().includes(name.toLowerCase())
    );
  }

  const handleSearchMovies = (name) => {
    setIsLoading(true);
    const newMovies = searchMovies(allMovies, name);
    setMovies(newMovies);
    localStorage.setItem("filteredMovies", JSON.stringify(newMovies));
    setFilteredMovies(newMovies);
    localStorage.setItem("searchKeyword", name);
    setSearchKeyword(name);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleSaveMovie = (movie) => {
    mainApi
      .postMovies(movie, token)
      .then((data) => {
        setSavedMovies([data, ...savedMovies]);
        localStorage.setItem(
          "savedMovies",
          JSON.stringify([data, ...savedMovies])
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteMovie = (movie) => {
    const savedMovie = savedMovies.find(
      (item) => item.movieId === movie.movieId
    );
    mainApi
      .deleteMovies(savedMovie._id, token)
      .then(() => {
        const newMoviesList = savedMovies.filter(
          (item) => item._id !== savedMovie._id
        );
        setSavedMovies(newMoviesList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signOut = () => {
    localStorage.removeItem("checkBox");
    localStorage.removeItem("searchKeyword");
    localStorage.removeItem("filteredMovies");
    localStorage.removeItem("savedMovies");
    localStorage.removeItem("loadedMovies");
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setIsLoading(false);
    setAllMovies([]);
    setMovies([]);
    setSavedMovies([]);
    setCurrentUser({});
    setSearchKeyword("");
    setFilteredMovies([]);
    setProfileInfoMessage("");
    setRegisterInfoMessage("");
    setLoginleInfoMessage("");
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
            <Register
              onAuth={handleRegister}
              infoMessage={registerInfoMessage}
            />
          </Route>
          <Route path="/signin">
            <Login onAuth={handleAutorize} infoMessage={loginInfoMessage} />
          </Route>
          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
            isLoggedIn={isLoggedIn}
            isLoading={isLoading}
            movies={movies}
            onSubmit={handleSearchMovies}
            onSave={handleSaveMovie}
            onDelete={handleDeleteMovie}
            searchKeyword={searchKeyword}
            savedMovies={savedMovies}
            setAllMovies={setAllMovies}
          />
          <ProtectedRoute
            exact
            path="/saved-movies"
            component={SavedMovies}
            isLoggedIn={isLoggedIn}
            isLoading={isLoading}
            onDelete={handleDeleteMovie}
            savedMovies={savedMovies}
            searchKeyword={searchKeyword}
          />
          <ProtectedRoute
            exact
            path="/profile"
            component={Profile}
            isLoggedIn={isLoggedIn}
            onUpdateUser={handleUpdateUser}
            signOut={signOut}
            infoMessage={profileInfoMessage}
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
