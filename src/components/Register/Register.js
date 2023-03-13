import AuthForm from "../AuthForm/AuthForm";
import RegisterForm from "../RegisterForm/RegisterForm";

function Register() {
    return(
        <>
            <main className="main">
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
            </main>
        </>
    )
}

export default Register;



