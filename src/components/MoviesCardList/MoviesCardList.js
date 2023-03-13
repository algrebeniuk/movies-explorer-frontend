import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import '../MoviesCardList/MoviesCardList.css';

function MoviesCardList( {movies} ) {
    const { pathname } = useLocation();
    return(
        <section className={`${pathname === '/movies' ? "movies" : "movies movies_saved"}`}>
            {movies.map((movie) => {
                return(
                    <MoviesCard 
                        key={movie._id}
                        name={movie.name}
                        duration={movie.duration}
                        image={movie.image}
                        like={movie.like}
                    />
                )
            })}
        </section>
    )
}

export default MoviesCardList;