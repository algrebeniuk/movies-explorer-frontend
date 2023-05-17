import LoginForm from "../LoginForm/LoginForm";

function Login({onLogin, errorMessage}) {

    return(
        <>
            <main className="main">
               
                    <LoginForm
                        errorMessage={errorMessage}
                        onLogin={onLogin}
                    >
                    </LoginForm>
                
            </main>
        </>
    )
}

export default Login;