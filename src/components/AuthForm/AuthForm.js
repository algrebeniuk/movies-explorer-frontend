import { Link, useLocation } from 'react-router-dom';
import '../AuthForm/AuthForm.css';


function AuthForm( {title, children, path, link, isRegistered} ) {
    const { pathname } = useLocation();
    return(
        <section className="auth">
            <Link className="auth__logo" to="/"></Link>
            <h2 className="auth__title">{title}</h2>
            {children}
            <div className="auth__container-link">
                <p className="auth__link-text">{isRegistered}</p>
                <Link className="auth__link" to={path}>{link}</Link>
            </div>
        </section>
    )
}

export default AuthForm;
