import '../FilterCheckbox/FilterCheckbox.css';

function FilterCheckbox() {
    return(
        <div className="filter-checkbox">
            <label className="filter-checkbox__container">
	            <input type="checkbox" />
	            <span className="filter-checkbox__switch"></span>
            </label>
            <label className="filter-checkbox__label">Короткометражки</label>
        </div>
    )
}

export default FilterCheckbox;