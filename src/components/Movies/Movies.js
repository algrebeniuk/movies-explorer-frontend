import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import '../Movies/Movies.css';
import Preloader from "../Preloader/Preloader";
import './Movies.css';
import moviesApi from "../../utils/MoviesApi";
import { useEffect, useState } from "react";
import mainApi from "../../utils/MainApi";

function Movies() {

    const[movie, setMovie] = useState([]);
    const[savedMovies, setSavedMovies] = useState([]);
    const[addedMovie, setAddedMovie] = useState(0);
    const[preloader, setPreloader] = useState(false);
    const[serverError, setServerError] = useState(false);
    const[notFoundMovies, setNotFoundMovies] = useState(false);
    
    function searcheMovies(movieName, shortMovie) {
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
            moviesNumber();
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
        searcheMovies(movieName, shortMovie);
    } 

    function handleLikeMovie(movies) {
        mainApi.addMovie(movies)    
         .then((likedMovie) => {
            const savedMoviesArray = [...savedMovies, likedMovie]
            setSavedMovies(savedMoviesArray);
            console.log(savedMoviesArray);
            localStorage.setItem('savedMovies', JSON.stringify(savedMoviesArray));
         }) 
         .catch((err) => {
            console.log(err);
         })    
    }

    function handleDislikeMovie(movie) {
        const dislikeMovie = savedMovies.find((likedMovie) => likedMovie.movieId === movie.id);
       // const movieId = dislikeMovie._id;
        mainApi.deleteMovie(dislikeMovie._id)
         .then(() => {
            const savedMoviesArray = savedMovies.filter((likedMovie) => likedMovie.movieId !== movie.id);
            setSavedMovies(savedMoviesArray);
            localStorage.setItem('savedMovies', JSON.stringify(savedMoviesArray));
         })
         .catch((err) => {
            console.log(err);
         }) 
    }

    function checkRenderedMovies() {
        if (JSON.parse(localStorage.getItem('renderedMovies')) != null) {
            setMovie( JSON.parse(localStorage.getItem('renderedMovies')) )
        }
    }
    
    useEffect(() => {
        checkRenderedMovies();
    }, [])

    useEffect(() => {
        mainApi.getMovies()
         .then((movie) => {
            localStorage.setItem('savedMovies', JSON.stringify(movie));
            setSavedMovies(movie);
         })
         .catch((err) => console.log(err));
    }, []);

    return(
        <>
            <Header/>
            <main className="main">         
                <SearchForm 
                    handleSearchMovie={handleSearchMovie}
                    inputValue={localStorage.getItem('movieName') || ""}
                    checkboxValue={JSON.parse(localStorage.getItem('shortMovie')) || false}
                />
                {preloader && <Preloader />}
                {(movie.length === 0) && (notFoundMovies) && <span className="movies__error">Ничего не найдено</span>}
                {serverError && <span className="movies__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>}
                <MoviesCardList 
                    movies={movie}
                    like={handleLikeMovie}
                    dislike={handleDislikeMovie}
                />
                <button 
                    className={JSON.parse(localStorage.getItem('renderedMovies')) != null 
                                ? (`${((JSON.parse(localStorage.getItem('renderedMovies')).length <=  movie.length) || (movie.length === 0)) ? "movies__btn_blocked" : "movies__btn"}` )
                                : "movies__btn_blocked"
                              } 
                    type="button"  
                    onClick={handleSearchMoreMovies} 
                >
                    Ещё
                </button>
            </main>
            <Footer />
        </>
    )
}

export default Movies;