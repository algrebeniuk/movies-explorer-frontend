import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { movies } from '../../utils/utils';
import Footer from "../Footer/Footer";
import '../Movies/Movies.css';

function Movies() {
    return(
        <>
            <Header/>
            <SearchForm/>
            <MoviesCardList
                movies={movies} 
            />
            <button className="movies__btn" type="button">Ещё</button>
            <Footer />
        </>
    )
}

export default Movies;