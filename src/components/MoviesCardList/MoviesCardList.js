import MoviesCard from '../MoviesCard/MoviesCard';
import '../MoviesCardList/MoviesCardList.css';

function MoviesCardList( {movies} ) {
    return(
        <section className="movies">
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