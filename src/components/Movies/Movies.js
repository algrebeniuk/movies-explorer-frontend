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
            <main className="main"> 
                <SearchForm/>
                <MoviesCardList
                    movies={movies} 
                />
                <button className="movies__btn" type="button">Ещё</button>
            </main>
            <Footer />
        </>
    )
}

export default Movies;