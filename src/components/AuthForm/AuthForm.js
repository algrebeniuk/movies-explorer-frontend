import { Link, useLocation } from 'react-router-dom';
import '../AuthForm/AuthForm.css';


function AuthForm( {title, children, path, link, isRegistered, btnText} ) {
    const { pathname } = useLocation();
    return(
        <section className="auth">
            <Link className="auth__logo" to="/"></Link>
            <h2 className="auth__title">{title}</h2>
            {children}
            <div className={`${pathname === "/signup" ? "auth__container" : "auth__container_type_login" }`}>
                <button className="auth__btn">{btnText}</button>
                <div className="auth__container-link">
                    <p className="auth__link-text">{isRegistered}</p>
                    <Link className="auth__link" to={path}>{link}</Link>
                </div>
            </div>
        </section>
    )
}

export default AuthForm;