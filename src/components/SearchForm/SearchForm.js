import { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import '../SearchForm/SearchForm.css';

function SearchForm( {handleSearchMovie, inputValue, checkboxValue} ) {

    const[movieName, setMovieName] = useState('');
    const[checkbox, setCheckbox] = useState(false);
    
    function handleChange(evt) {
        setMovieName(evt.target.value);
    }

    function handleChangeCheckbox(evt) {
        setCheckbox(evt.target.checked);
    }

    function handleSubmit(evt) {
      evt.preventDefault();
      handleSearchMovie(movieName, checkbox);
    }

    useEffect(() => {
      setMovieName(inputValue);
      setCheckbox(checkboxValue); 
    }, [inputValue, checkboxValue])

    return(
        <section className="search">
            <form className="search-form" onClick={handleSubmit}>
                <input className="search-form__input" type="text" placeholder="Фильм" onChange={handleChange} value={movieName || ""} required></input>  
                <button className="search-form__btn" type="submit">Поиск</button>
            </form>
            <FilterCheckbox
                handleChangeCheckbox={handleChangeCheckbox}
                checkbox={checkbox}
            /> 
        </section>
    )
}

export default SearchForm;