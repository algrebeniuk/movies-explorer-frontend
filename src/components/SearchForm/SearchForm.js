import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import '../SearchForm/SearchForm.css';

function SearchForm({onSubmit}) {

    return(
        <section className="search">
            <form className="search-form" onSubmit={onSubmit}>
                <input className="search-form__input" type="text" placeholder="Фильм" required></input>
                <button className="search-form__btn" type="submit">Поиск</button>
            </form>
            <FilterCheckbox/>
        </section>
    )
}

export default SearchForm;