import AuthForm from "../AuthForm/AuthForm";
import LoginForm from "../LoginForm/LoginForm";
import {useFormWithValidation} from '../FormValidation/FormValidation';

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