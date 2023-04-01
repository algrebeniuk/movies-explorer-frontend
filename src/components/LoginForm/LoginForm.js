import '../RegisterForm/RegisterForm.css';
import {useFormWithValidation} from '../FormValidation/FormValidation';
import { Link } from 'react-router-dom';
import '../AuthForm/AuthForm.css';

function LoginForm( {onLogin, errorMessage} ) {

    const { values, isValid, handleChange, errors } = useFormWithValidation({
        email: "",
        password: "",
    })

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (isValid) {
          onLogin({
            email: values.email,
            password: values.password,
          });
        }
    };

    return(
      <section className="auth">
        <Link className="auth__logo" to="/"></Link>
        <h2 className="auth__title">Рады видеть!</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <fieldset className="register-form__fieldset">
                <label className="register-form__label">E-mail</label>
                <input 
                    className={`${errors.email ? "register-form__input register-form__input_type_error" : "register-form__input"}`}  
                    name="email"
                    required
                    type="email"
                    placeholder="Введите почту"
                    onChange={handleChange}
                    value={values.email || ""}
                />
                <span className={`${errors.email ? "register-form__error register-form__error_active" : "register-form__error"}`}>Что-то пошло не так...</span>
            </fieldset>
            <fieldset className="register-form__fieldset">
                <label className="register-form__label">Пароль</label>
                <input 
                    name="password"
                    className={`${errors.password ? "register-form__input register-form__input_type_error" : "register-form__input"}`} 
                    required    
                    type="password"
                    placeholder="Введите пароль"
                    minLength="8"
                    onChange={handleChange}
                    value={values.password || ""}
                />
                <span className={`${errors.password ? "register-form__error register-form__error_active" : "register-form__error"}`}>Что-то пошло не так...</span>
            </fieldset>
            <button className="register__btn register__btn_type_login" type="submit" disabled={!isValid}>Войти
                <span className="register__server-response">{errorMessage}</span>
            </button>
        </form>
        <div className="auth__container-link">
            <p className="auth__link-text">Ещё не зарегистрированы?</p>
            <Link className="auth__link" to='/signup'>Регистрация</Link>
        </div>
      </section>
    )
}

export default LoginForm;