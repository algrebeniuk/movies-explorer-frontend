import { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import '../SearchForm/SearchForm.css';

function SearchForm( {onSubmit, value} ) {

    const[movieName, setMovieName] = useState('');

    function handleChange(evt) {
        setMovieName(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit(movieName);
    }

    useEffect(() =>{
        setMovieName(value)
    }, [value])

    return(
        <section className="search">
            <form className="search-form" onSubmit={handleSubmit}>
                <input className="search-form__input" type="text" placeholder="Фильм" onChange={handleChange} value={movieName || ""} required></input>
                <button className="search-form__btn" type="submit">Поиск</button>
            </form>
            <FilterCheckbox/>
        </section>
    )
}

export default SearchForm;