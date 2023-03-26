import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { movies } from '../../utils/utils';
import Footer from "../Footer/Footer";
import '../Movies/Movies.css';

function Movies( {handleSearchMovies, movies, handleSearchMoreMovies, value} ) {

    const renderedMovies = JSON.parse(localStorage.getItem('renderedMovies'));  

    return(
        <>
            <Header/>
            <main className="main"> 
                <SearchForm onSubmit={handleSearchMovies}/>
                <MoviesCardList 
                    movies={movies} 
                    value={value}
                />
                <button 
                    className={`${((renderedMovies.length <=  movies.length) || (movies.length === 0)) ? "movies__btn_blocked" : "movies__btn"}`} 
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