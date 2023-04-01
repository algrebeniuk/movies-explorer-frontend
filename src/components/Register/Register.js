import AuthForm from "../AuthForm/AuthForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import {useFormWithValidation} from '../FormValidation/FormValidation'

function Register({onRegister, errorMessage}) {
    
    return(
        <>
            <main className="main">
                
                    <RegisterForm
                        errorMessage={errorMessage}
                        onRegister={onRegister}
                    >
                    </RegisterForm>
                
            </main>
        </>
    )
}

export default Register;



