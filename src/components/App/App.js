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
    const[preloader, setPreloader] = useState(false);
    const[serverError, setServerError] = useState(false);
    const[notFoundMovies, setNotFoundMovies] = useState(false);

    function searchMovie(movieName, shortMovie) {
      setPreloader(true);
      setNotFoundMovies(false);
      moviesApi.getMovies()
        .then((movies) => {
          const searchedMovies = movies.filter((item) => item.nameRU.toLowerCase().includes(movieName.toLowerCase()));
          const renderedMovies = shortMovie ? searchedMovies.filter((item) => item.duration <= 40) : searchedMovies;
          localStorage.setItem('renderedMovies', JSON.stringify(renderedMovies));
          localStorage.setItem('movieName', movieName);
          localStorage.setItem('shortMovie', shortMovie);
          setPreloader(false);
          setNotFoundMovies(true);
          moviesNumber()
        })
        .catch((err) => {
          console.log(err);
          setPreloader(false);
          setServerError(true);
        })
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

    function handleSearchMovie(movieName, shortMovie) {
      searchMovie(movieName, shortMovie);
    }  

    return (
        <>
            <Switch>
                <Route exact path="/">
                  <Main/>
                </Route>    
                <Route path="/movies">
                  <Movies
                    handleSearchMovie={handleSearchMovie}
                    inputValue={localStorage.getItem('movieName') || ""}
                    checkboxValue={localStorage.getItem('shortMovie') || ""}
                    movies={movie} 
                    handleShowMore={handleSearchMoreMovies}
                    serverError={serverError}
                    preloader={preloader}
                    notFoundMovies={notFoundMovies}
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
