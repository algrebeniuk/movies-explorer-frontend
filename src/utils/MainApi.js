export const url = 'http://localhost:3002'; 

class MainApi {
    constructor(url) {
      this._url = url;
    }
  
    _checkResponse (res) {
        return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    }

    async register(user) {
        const res = await fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: user.email,
                password: user.password,
                name: user.name
            }),
        });
        return this._checkResponse(res);
    };

    async login(user) {
        const res = await fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: user.email,
                password: user.password,
            }),
        });
        if (res.token) {
            localStorage.setItem('jwt', res.token);
            return res;
        }  
        return this._checkResponse(res);
    };

    async checkToken(jwt) {
        const res = await fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${jwt}`,
                'Content-Type': 'application/json'
            },
        });
        return this._checkResponse(res);
    };
  
    async editUser(name, email) {
        const res = await fetch(`${this._url}/users/me`, {
              method: 'PATCH',
              headers: {
                  'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ name, email })
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

const mainApi = new MainApi(
    url,
);

export default mainApi;