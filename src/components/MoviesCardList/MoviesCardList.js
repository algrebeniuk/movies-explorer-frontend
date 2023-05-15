import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import '../MoviesCardList/MoviesCardList.css'; 

function MoviesCardList( {movies, like, dislike, handleDelete} ) {
    const { pathname } = useLocation();
    
    return(
        <section className={`${pathname === "/movies" ? "movies" : "movies movies_saved"}`}>
            {movies.map((movie) => {
                return(
                    <MoviesCard 
                        key={`${pathname === "/movies" ? movie.id : movie.movieId}`}
                        name={movie.nameRU} 
                        duration={movie.duration}
                        image={`${pathname === "/movies" ? `https://api.nomoreparties.co/${movie.image.url}` : movie.image}`}
                        like={like}
                        dislike={dislike}
                        movie={movie}
                        handleDelete={handleDelete}
                    />
                )
            })}
        </section>
    )
}

export default MoviesCardList;
