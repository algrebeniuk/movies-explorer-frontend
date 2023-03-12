import '../RegisterForm/RegisterForm.css';

function LoginForm( {errorText} ) {
    return(
        <form className="register-form">
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
                    className="register-form__input" 
                    type="password"
                />
                <span className="register-form__error">{errorText}</span>
            </fieldset>
        </form>
    )
}

export default LoginForm;