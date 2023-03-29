import { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import '../SearchForm/SearchForm.css';

function SearchForm( {handleSearchMovie, inputValue, checkboxValue} ) {

    const[movieName, setMovieName] = useState('');
    const[checkbox, setCheckbox] = useState(false);

    function handleChange(evt) {
        setMovieName(evt.target.value);
    }

    function handleChangeCheckbox(e) {
        const shortMovie = e.target.checked;
        setCheckbox(shortMovie);
        handleSearchMovie(movieName, shortMovie);
      }

      function handleSubmit(e) {
        e.preventDefault();
        handleSearchMovie(movieName, checkbox);
      }

      useEffect(() => {
        setMovieName(inputValue);
        setCheckbox(checkboxValue);
      }, [])

    return(
        <section className="search" onSubmit={handleSubmit}>
            <form className="search-form">
                <input className="search-form__input" type="text" placeholder="Фильм" onChange={handleChange} value={movieName || ""} required></input>
                <button className="search-form__btn" type="submit" onSubmit={handleSubmit}>Поиск</button>
            </form>
            <FilterCheckbox
                handleChangeCheckbox={handleChangeCheckbox}
            />
        </section>
    )
}

export default SearchForm;