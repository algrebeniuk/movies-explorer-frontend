import RegisterForm from "../RegisterForm/RegisterForm";

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



