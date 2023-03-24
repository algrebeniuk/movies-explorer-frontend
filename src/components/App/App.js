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

    function searchMovies() {
      moviesApi.getMovies()
        .then((movie) => {
          //setMovie(movie) 
          moviesNumber(movie);
        })  
        .catch((err) => console.log(err))
    }

    function handleSearchMovies(evt) {
      evt.preventDefault();
      searchMovies();
    }

   /* function handleSearchMoreMovies() {
      return setMovie
    }*/

    function moviesNumber(movie) {
      if  (window.innerWidth > 570) {
        setMovie(movie.slice(0, 7))
      } else {
        setMovie(movie.slice(0, 5))
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
