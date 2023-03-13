import '../RegisterForm/RegisterForm.css';

function RegisterForm( {errorText} ) {
    return(
        <form className="register-form">
            <fieldset className="register-form__fieldset">
                <label className="register-form__label">Имя</label>
                <input 
                    className="register-form__input" 
                    type="text"
                    defaultValue="Виталий"
                />
                <span className="register-form__error">{errorText}</span>
            </fieldset>
            <fieldset className="register-form__fieldset">
                <label className="register-form__label">E-mail</label>
                <input 
                    className="register-form__input" 
                    type="email"
                    defaultValue="pochta@yandex.ru|"
                />
                <span className="register-form__error">{errorText}</span>
            </fieldset>
            <fieldset className="register-form__fieldset">
                <label className="register-form__label">Пароль</label>
                <input 
                    className="register-form__input register-form__input_type_error" 
                    type="password"
                    defaultValue="••••••••••••••"
                />
                <span className="register-form__error register-form__error_active">{errorText}</span>
            </fieldset>
        </form>
    )
}

export default RegisterForm;

