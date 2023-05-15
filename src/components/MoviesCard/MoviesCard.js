
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import '../MoviesCard/MoviesCard.css';
import { useEffect, useState } from 'react';

function MoviesCard( {name, duration, image, like, movie, dislike, handleDelete} ) {
    const { pathname } = useLocation();
    const[isLiked, setLiked] = useState(false);

    function setDuration() {
        if (duration / 60 >= 1) {
            return Math.floor(duration / 60) + 'ч ' + duration % 60 + 'м';
        } else {
            return duration + 'м';
        }
    }

    function switchLikeStatus() {
        if(!isLiked) {
            setLiked(true);
            like(movie); 
            
        } else {
            setLiked(false);
            dislike(movie);
        }
    }

    function likeCheck() {
        const savedMovies = JSON.parse(localStorage.getItem('savedMovies'))
        const savedMoviesArray = savedMovies.find((likedMovie) => likedMovie.movieId === movie.id);
        if (savedMoviesArray) {
            setLiked(true);
        } else {
            setLiked(false);
        } 
    };
    
    useEffect(() => {
        likeCheck();
    });

    function deleteSavedMovie() {
        setLiked(false);
        handleDelete(movie);
    }

    return(
        <article className="movie">
            <div className="movie__info">
                <div className="movie__info_container">
                    <h2 className="movie__name">{name}</h2>
                    <p className="movie__duration">{setDuration()}</p>
                </div>
                {pathname === '/movies' ? (
                    <button className={`${isLiked ? "movie__like movie__like_active" : "movie__like" }`} type="button" onClick={switchLikeStatus}></button>
                ) : (
                    <button className="movie__unsaved" onClick={deleteSavedMovie}></button>
                )    
                }
            </div>
            <img className="movie__img" alt={`Постер к фильму "${name}"`} src={image}/>
        </article>
    )
}

export default MoviesCard;