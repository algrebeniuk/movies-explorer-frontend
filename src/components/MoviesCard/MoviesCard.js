import { useLocation } from 'react-router-dom';
import '../MoviesCard/MoviesCard.css';

function MoviesCard( {name, duration, image, like} ) {
    const { pathname } = useLocation();

    function setDuration() {
        if (duration / 60 >= 1) {
            return Math.floor(duration / 60) + 'ч ' + duration % 60 + 'м';
        } else {
            return duration + 'м';
        }
    } 

    return(
        <article className="movie">
            <div className="movie__info">
                <div className="movie__info_container">
                    <h2 className="movie__name">{name}</h2>
                    <p className="movie__duration">{setDuration()}</p>
                </div>
                {pathname === '/movies' ? (
                    <button className={`${like ? "movie__like movie__like_active" : "movie__like" }`} type="button" ></button>
                ) : (
                    <button className="movie__unsaved"></button>
                )    
                }
            </div>
            <img className="movie__img" alt={`Постер к фильму "${name}"`} src={image}/>
        </article>
    )
}

export default MoviesCard;