import { useEffect, useState } from 'react';
import '../FilterCheckbox/FilterCheckbox.css';

function FilterCheckbox( {handleChangeCheckbox} ) {

    return(
        <div className="filter-checkbox" >
            <label className="filter-checkbox__container" checked={false || true} onChange={handleChangeCheckbox}>
	            <input type="checkbox" />
	            <span className="filter-checkbox__switch"></span>
            </label>
            <label className="filter-checkbox__label">Короткометражки</label>
        </div>
    )
}

export default FilterCheckbox;

