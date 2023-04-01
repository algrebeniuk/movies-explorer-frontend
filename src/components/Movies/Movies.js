import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { movies } from '../../utils/utils';
import Footer from "../Footer/Footer";
import '../Movies/Movies.css';
import Preloader from "../Preloader/Preloader";
import './Movies.css';

function Movies( {handleSearchMovie, inputValue, movies, handleShowMore, serverError, preloader, notFoundMovies, checkboxValue} ) {

    const renderedMovies = JSON.parse(localStorage.getItem('renderedMovies'));
    
    return(
        <>
            <Header/>
            <main className="main"> 
                <SearchForm 
                    handleSearchMovie={handleSearchMovie}
                    inputValue={inputValue}
                    checkboxValue={checkboxValue}
                />
                {preloader && <Preloader />}
                {(movies.length === 0) && (notFoundMovies) && <span className="movies__error">Ничего не найдено</span>}
                {serverError && <span className="movies__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>}
                <MoviesCardList 
                    movies={movies}
                />
                <button 
                    className={`${((renderedMovies.length <=  movies.length) || (movies.length === 0)) ? "movies__btn_blocked" : "movies__btn"}`} 
                    type="button" 
                    onClick={handleShowMore}
                >
                    Ещё
                </button>
            </main>
            <Footer />
        </>
    )
}

export default Movies;

//className={`${((renderedMovies.length <=  movies.length) || (movies.length === 0)) ? "movies__btn_blocked" : "movies__btn"}`} 