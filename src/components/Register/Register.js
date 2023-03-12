import AuthForm from "../AuthForm/AuthForm";
import RegisterForm from "../RegisterForm/RegisterForm";

function Register() {
    return(
        <AuthForm
            title='Добро пожаловать!'
            path='/signin'
            link='Войти'
            isRegistered='Уже зарегистрированы?'
            btnText='Зарегистрироваться'
        >
            <RegisterForm
                errorText='Что-то пошло не так...'
            >
            </RegisterForm>
        </AuthForm>
    )
}

export default Register;



