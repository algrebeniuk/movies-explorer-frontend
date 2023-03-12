import { Link } from "react-router-dom";
import Icon from '../../images/account-icon.svg';
import '../Navigation/Navigation.css';
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Navigation() {
    return(
        <>
            <nav className="navigation">
                <div className="navigation-links">
                    <Link className="navigation-link__movie" to="/movies">Фильмы</Link>
                    <Link className="navigation-link__saved-movie" to="/saved-movies">Сохранённые фильмы</Link>
                </div>
                <Link className="navigation-account" to="/profile">
                    <p className="navigation-account__text">Аккаунт</p>
                    <img className="navigation-account__img" alt="иконка" src={Icon} />
                </Link>
            </nav>
            <BurgerMenu/>    
        </>
    )
}

export default Navigation;