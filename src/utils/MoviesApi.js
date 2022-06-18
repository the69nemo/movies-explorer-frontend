class MoviesApi {
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

  getAllMovies () {
    return fetch(`${this._url}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => this._handleResponse(res));
  }
};

export const moviesApi = new MoviesApi ({
  url: 'https://api.nomoreparties.co/beatfilm-movies'
});