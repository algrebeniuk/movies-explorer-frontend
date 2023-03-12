import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import '../Movies/Movies.css';
import { savedMovies } from '../../utils/utils';

function SavedMovies() {
    return(
        <>
            <Header/>
            <SearchForm/>
            <MoviesCardList
                movies={savedMovies} 
            />
            <button className="movies__btn" type="button">Ещё</button>
            <Footer/>
        </>
    )
}

export default SavedMovies;