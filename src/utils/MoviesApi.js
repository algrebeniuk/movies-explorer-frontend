class MoviesApi {
    constructor({url}) {
      this._url = url;
    }
  
    _serverСorrectness(res){
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    async getMovies() {
      const res = await fetch(`${this._url}`, {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        });
        return this._serverСorrectness(res);
    }
  }
  
  export const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies'
  })