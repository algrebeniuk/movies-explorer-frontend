import { Link, useLocation } from 'react-router-dom';
import '../BurgerMenu/BurgerMenu.css';
import Icon from '../../images/account-icon.svg';
import { useState } from 'react';

function BurgerMenu() {
    const[isMenuOpen, SetIsMenuOpen] = useState(false);
    const { pathname } = useLocation();
    
    function toggleMenuMode() {
        SetIsMenuOpen(!isMenuOpen);
    }

    return(
        <nav className="burger-menu">
            <button className="burger-menu__btn" type="button" onClick={toggleMenuMode}></button>
            <div className={`burger-menu__popup ${isMenuOpen ? "burger-menu__popup_opened" : ""}`}>
                <div className="burger-menu__container">
                    <button className="burger-menu__container-btn" type="button" onClick={toggleMenuMode}></button>
                    <div className="burger-menu__links">
                        <Link to="/" className="burger-menu__link">Главная</Link>
                        <Link to="/movies" className={`burger-menu__link ${pathname === '/movies' ? 'burger-menu__link_underline' : ''}`}>Фильмы</Link>
                        <Link to="/saved-movies" className={`burger-menu__link ${pathname === '/saved-movies' ? 'burger-menu__link_underline' : ''}`}>Сохранённые фильмы</Link>
                    </div>
                    <Link className="burger-menu__account" to="/profile">
                        <p className="burger-menu__account-text">Аккаунт</p>
                        <img className="burger-menu__account-img" alt="иконка" src={Icon} />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default BurgerMenu;