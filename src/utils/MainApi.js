class MainApi {
    constructor({url}) {
      this._url = url;
    }
  
    _checkResponse (res) {
        return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    }
  
    async register({password, email, name}) {
        const res = await fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password,
                email,
                name
            })
        });
        return this._checkResponse(res);
    };
  
    async login({password, email}) {
      const res = await fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            }),
        });
        const data = this._checkResponse(res);
        localStorage.setItem('jwt', data.token);
        return data;
    };
  
    async checkToken(jwt) {
      const res = await fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
        });
        return this._checkResponse(res);
    };
  
    async editProfile({name, email}) {
      const res = await fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email
            })
        });
        return this._checkResponse(res);
    }
  
    async addMovie(movie) {
      const res = await fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                movie
            })
        });
        return this._checkResponse(res);
    }
  
    async getMovies() {
      const res = await fetch(`${this._url}/movies`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
            },
        });
        return this._checkResponse(res);
    }
  
    async deleteMovie(movieId) {
      const res = await fetch(`${this._url}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
            },
        });
        return this._checkResponse(res);
    }
  
  }
  
export const mainApi = new MainApi({
     url: 'http://localhost:3000'
})