import Header from '../Header/Header';
import '../Profile/Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import {useFormWithValidation} from '../FormValidation/FormValidation'
import { useContext, useEffect, useState } from 'react';

function Profile({handleEditProfile, handleLogOut, errorMessage, successMessage}) {

    const { currentUser } = useContext(CurrentUserContext);
    const { values, isValid, handleChange, setValues } = useFormWithValidation();
    const[valueChange, setValueChange] = useState(true);

    useEffect(() => {
        setValues({
            name: currentUser.name,
            email: currentUser.email,
        }); 
    }, [setValues, currentUser.name, currentUser.email]);

    function handleSubmit(evt) {
        evt.preventDefault();
        handleEditProfile({ 
          name: values.name,
          email: values.email 
        });
    }

    const btnStatus = isValid && (values.name !== currentUser.name || values.email !== currentUser.email)

    function editProfile() {
        setValueChange(false);
    }

    return(
        <>
            <Header/>
            <main className="profile">
                <h2 className="profile__name">Привет, {currentUser.name}!</h2>
                <form className="profile__form" onSubmit={handleSubmit}>
                    <fieldset className="profile__fieldset">
                        <label className="profile__label">Имя</label>
                        <input 
                            name="name"
                            className="profile__input" 
                            value={values.name || ""}
                            type="text"
                            minLength="2"
                            maxLength="30"
                            onChange={handleChange}
                            placeholder="Введите имя"
                            required 
                        />
                    </fieldset>
                    <fieldset className="profile__fieldset">
                        <label className="profile__label">E-mail</label>
                        <input 
                            name="email"
                            className="profile__input" 
                            placeholder="Введите email"
                            type="email"
                            value={values.email || ""}
                            onChange={handleChange}
                            pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
                            required
                        />
                    </fieldset>
                    {valueChange ? (
                        <>
                            <button className="profile__btn profile__btn_type_edit" type="submit" onClick={editProfile}>Редактировать</button>
                            <button className="profile__btn profile__btn_type_logout" type="submit" onClick={handleLogOut}>Выйти из аккаунта</button>
                        </>
                    ) : (
                            <button className="profile__submit-btn" type="submit" disabled={!btnStatus}>Сохранить
                                <span className={`${errorMessage ? "register__error-message" : "register__success-message"}`}>{errorMessage || successMessage}</span>
                            </button>
                    )
                    }
                </form>
            </main>
        </>
    )
}

export default Profile;