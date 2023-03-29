import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import '../MoviesCardList/MoviesCardList.css'; 

function MoviesCardList( {movies} ) {
    const { pathname } = useLocation();
    return(
        <section className={`${pathname === "/movies" ? "movies" : "movies movies_saved"}`}>
            {movies.map((movie) => {
                return(
                    <MoviesCard 
                        key={movie.id}
                        name={movie.nameRU}
                        duration={movie.duration}
                        image={`https://api.nomoreparties.co/${movie.image.url}`}
                        like={movie.like}
                    />
                )
            })}
        </section>
    )
}

export default MoviesCardList;