import AuthForm from "../AuthForm/AuthForm";
import LoginForm from "../LoginForm/LoginForm";

function Login() {
    return(
        <AuthForm
            title='Рады видеть!'
            path='/signup'
            link='Регистрация'
            isRegistered='Ещё не зарегистрированы?'
            btnText='Войти'
        >
            <LoginForm
                errorText='Что-то пошло не так...'
            >
            </LoginForm>
        </AuthForm>
    )
}

export default Login;