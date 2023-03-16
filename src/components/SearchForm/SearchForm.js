import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import '../SearchForm/SearchForm.css';

function SearchForm() {
    return(
        <section className="search">
            <form className="search-form">
                <input className="search-form__input" type="text" placeholder="Фильм" required></input>
                <button className="search-form__btn" type="submit">Поиск</button>
            </form>
            <FilterCheckbox/>
        </section>
    )
}

export default SearchForm;