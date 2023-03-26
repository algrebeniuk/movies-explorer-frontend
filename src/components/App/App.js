import Main from '../Main/Main';
import '../App/App.css';
/*import Footer from '../Footer/Footer';
import Header from "../Header/Header";*/
import { Route, Switch } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { useEffect, useState } from 'react';
import { moviesApi } from '../../utils/MoviesApi';

function App() {

    const[movie, setMovie] = useState([]);
    const[addedMovie, setAddedMovie] = useState(0);

    function searchMovies(movieName) {
      moviesApi.getMovies()
        .then((movie) => {
          const renderedMovies = movie.filter((movies) => 
            movies.nameRU.toLowerCase().includes(movieName.toLowerCase())
          ) 
          localStorage.setItem('movieName', movieName)
          localStorage.setItem('renderedMovies', JSON.stringify(renderedMovies))
          moviesNumber();
        })  
        .catch((err) => console.log(err)) 
    }

    function handleSearchMovies(movieName) {
      searchMovies(movieName);
    }

    function handleSearchMoreMovies() {
      const renderedMovies = JSON.parse(localStorage.getItem('renderedMovies'));
      setMovie(renderedMovies.slice(0, movie.length + addedMovie));
    }

    function moviesNumber() {
      const renderedMovies = JSON.parse(localStorage.getItem('renderedMovies'));
      if  (window.innerWidth > 570) {
        setMovie(renderedMovies.slice(0, 7));
        setAddedMovie(7);
      } else {
        setMovie(renderedMovies.slice(0, 5));
        setAddedMovie(5);
      }
    }

    return (
        <>
            <Switch>
                <Route exact path="/">
                  <Main/>
                </Route>    
                <Route path="/movies">
                  <Movies
                    handleSearchMovies={handleSearchMovies}
                    movies={movie}
                    handleSearchMoreMovies={handleSearchMoreMovies}
                    value={localStorage.getItem('movieName')  }
                  />
                </Route>
                <Route path="/saved-movies">
                  <SavedMovies/>
                </Route>
                <Route path="/profile">
                  <Profile/>
                </Route>
                <Route path="/signup">
                  <Register/>
                </Route>
                <Route path="/signin">
                  <Login/>
                </Route>
                <Route path="*">
                  <PageNotFound/>
                </Route>
            </Switch> 
        </>
    )
}

export default App;
