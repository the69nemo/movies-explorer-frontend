import {MOVIES_URL} from './constants';

class MainApi {
  constructor ({ url }) {
    this._url = url;
  }

  _handleResponse (res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка ${res.status}`)
    }
  }

  getUserInfo (token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    })
    .then((res) => this._handleResponse(res));
  }

  editProfile (userInfo, token) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(userInfo),
    })
    .then((res) => this._handleResponse(res))
  }

  getMovies (token) {
    return fetch(`${this._url}/movies`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    })
    .then((res) => this._handleResponse(res));
  }

  postMovies(movie, token) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${MOVIES_URL}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${MOVIES_URL}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    })
    .then ((res) => this._handleResponse(res));
  }

  deleteMovies (movieId, token) {
    return fetch(`${this._url}/movies/${movieId}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    })
    .then((res) => this._handleResponse(res));
  }
};

export const mainApi = new MainApi ({
  url: 'https://api.diplom.nomoreparties.sbs'
});