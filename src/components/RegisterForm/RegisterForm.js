import '../RegisterForm/RegisterForm.css';
import {useFormWithValidation} from '../FormValidation/FormValidation'
import { Link } from 'react-router-dom';
import '../AuthForm/AuthForm.css';

function RegisterForm( {onRegister, errorMessage} ) {

    const { values, isValid, handleChange, errors } = useFormWithValidation({
        name: "",
        email: "",
        password: "",
      }) 

    function handleSubmit(evt) {
        evt.preventDefault();
        if (isValid) {
            onRegister({
              name: values.name,
              email: values.email,
              password: values.password,
            });
        } 
    }

    return(
      <section className="auth">
        <Link className="auth__logo" to="/"></Link>
        <h2 className="auth__title">Добро пожаловать!</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <fieldset className="register-form__fieldset">
                <label className="register-form__label">Имя</label>
                <input 
                    className={`${errors.name ? "register-form__input register-form__input_type_error" : "register-form__input"}`} 
                    name="name"
                    required
                    type="text"
                    placeholder="Ваше имя"
                    onChange={handleChange}
                    value={values.name || ""}
                    minLength="2"
                    maxLength="30"
                />
                <span className={`${errors.name ? "register-form__error register-form__error_active" : "register-form__error"}`}>Что-то пошло не так...</span>
            </fieldset>
            <fieldset className="register-form__fieldset">
                <label className="register-form__label">E-mail</label>
                <input 
                    className={`${errors.email ? "register-form__input register-form__input_type_error" : "register-form__input"}`}  
                    required
                    name="email"
                    type="email"
                    placeholder="Введите почту"
                    onChange={handleChange}
                    value={values.email || ""}
                    pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
                />
                <span className={`${errors.email ? "register-form__error register-form__error_active" : "register-form__error"}`}>Что-то пошло не так...</span>
            </fieldset>
            <fieldset className="register-form__fieldset">
                <label className="register-form__label">Пароль</label>
                <input 
                    className={`${errors.password ? "register-form__input register-form__input_type_error" : "register-form__input"}`} 
                    name="password"
                    required 
                    type="password"
                    placeholder="Пароль не менее 8 символов"
                    onChange={handleChange}
                    value={values.password || ""}
                    minLength="8"
                />
                <span className={`${errors.password ? "register-form__error register-form__error_active" : "register-form__error"}`}>Что-то пошло не так...</span>
            </fieldset>
            <span className="register__server-response">{errorMessage}</span>
            <button className="register__btn" type="submit" disabled={!isValid}>Зарегистрироваться</button>
        </form>
        <div className="auth__container-link">
                <p className="auth__link-text">Уже зарегистрированы?</p>
                <Link className="auth__link" to="/signin">Войти</Link>
        </div>
      </section>
    )
}

export default RegisterForm;

