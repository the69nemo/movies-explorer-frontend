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
  const [isLoading, setIsLoading] = useState(false);
  const [notFoundMessage, setNotFoundMessage] = useState("");
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
      mainApi
        .getUserInfo(token)
        .then((user) => setCurrentUser(user))
        .catch((err) => `Ошибка получения данных пользователя: ${err}`);

      mainApi
        .getMovies(token)
        .then((res) => {
          setSavedMovies(res);
          localStorage.setItem("savedMovies", JSON.stringify(res));
        })
        .catch((err) => console.log(err));

      if (searchKeyword.length) {
        moviesApi
          .getAllMovies()
          .then((data) => {
            setAllMovies(data);
            localStorage.setItem("loadedMovies", JSON.stringify(data));
          })
          .catch((err) => console.log(err));
      }
    }
  }, [isLoggedIn, filteredMovies]);

  const handleRegister = ({ name, password, email }) => {
    auth
      .register(name, password, email)
      .then(() => {
        handleAutorize({ password, email });
      })
      .catch((err) => {
        return err === 400
          ? console.log("Ошибка 400 - некорректно заполнено одно из полей")
          : console.log(`Ошибка ${err}`);
      });
  };

  const handleAutorize = ({ password, email }) => {
    auth
      .authorize(password, email)
      .then((data) => {
        auth.getToken(data.token).then(() => {
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
    if (localStorage.getItem("filteredMovies") === "[]") {
      setNotFoundMessage("По вашему запросу ничего не найдено");
    }
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleSaveMovie = (movie) => {
    setIsLoading(true);
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
      })
      .finally(() => {
        setTimeout(() => setIsLoading(false), 1000);
      });
  };

  const handleDeleteMovie = (movie) => {
    setIsLoading(true);
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
      })
      .finally(() => {
        setTimeout(() => setIsLoading(false), 1000);
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
            isLoading={isLoading}
            movies={movies}
            savedMovies={savedMovies}
            onSubmit={handleSearchMovies}
            onSave={handleSaveMovie}
            onDelete={handleDeleteMovie}
            searchKeyword={searchKeyword}
            notFoundMessage={notFoundMessage}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            isLoggedIn={isLoggedIn}
            isLoading={isLoading}
            onDelete={handleDeleteMovie}
            savedMovies={savedMovies}
            searchKeyword={searchKeyword}
            notFoundMessage={notFoundMessage}
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
