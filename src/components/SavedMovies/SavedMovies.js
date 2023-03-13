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
            <main className="main">
                <SearchForm/>
                <MoviesCardList
                    movies={savedMovies} 
                />
            </main>
            <Footer/>
        </>
    )
}

export default SavedMovies;