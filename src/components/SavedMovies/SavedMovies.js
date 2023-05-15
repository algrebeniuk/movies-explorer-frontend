import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import '../Movies/Movies.css';
import { useEffect, useState } from "react";
import mainApi from "../../utils/MainApi";

function SavedMovies() {

    const[savedMovies, setSavedMovies] = useState([]);

    function handleDelete(movie) {
        mainApi.deleteMovie(movie._id)
          .then(() => {
            const savedMoviesArray = savedMovies.filter((likedMovie) => likedMovie._id !== movie._id);
            localStorage.setItem('savedMovies', JSON.stringify(savedMoviesArray));
            setSavedMovies(savedMoviesArray);
          })
          .catch((err) => console.log(err));
      }

    useEffect(() => {
        mainApi.getMovies()
         .then((movie) => {
            localStorage.setItem('savedMovies', JSON.stringify(movie));
            setSavedMovies(movie);
         })
         .catch((err) => console.log(err));
    }, []);

    function searcheMovies(movieName, shortMovie) {
        console.log(movieName, shortMovie)
        const searchedMovies = savedMovies.filter((item) => item.nameRU.toLowerCase().includes(movieName.toLowerCase()));
        if(shortMovie) {
            setSavedMovies(searchedMovies.filter((item) => item.duration <= 40));
        } else {
            setSavedMovies(searchedMovies);
        }
    }

    return(
        <>
            <Header/>
            <main className="main">
                <SearchForm
                    handleSearchMovie={searcheMovies}
                    inputValue={""}
                    checkboxValue={false}
                />
                <MoviesCardList
                    movies={savedMovies} 
                    handleDelete={handleDelete}
                />
            </main>
            <Footer/>
        </>
    )
}

export default SavedMovies;