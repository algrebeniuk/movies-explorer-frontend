export const url = 'https://api.nomoreparties.co/beatfilm-movies'; 

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

const moviesApi = new MoviesApi(
    url
);

export default moviesApi;