import './Header.css'
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import HeaderLogo from '../../images/header-logo.svg';

function Header() {
  const { pathname } = useLocation();

  return (
        <header className={`${pathname === '/' ? "header header_type_main" : "header"}`}>
            <Link to="/" className="header__link-logo">
              <img className="header__logo" alt="Логотип" src={HeaderLogo} />
            </Link>
            {pathname !== '/' ? <Navigation/> :
            <div className="header__links">
              <Link className="header__link" to="/signup">Регистарция</Link>
              <Link className="header__link header__link_button" to="/signin">Войти</Link>
            </div>
          }
      </header>
  
    
  )
}

export default Header;