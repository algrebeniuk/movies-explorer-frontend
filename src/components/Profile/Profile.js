import Header from '../Header/Header';
import '../Profile/Profile.css';

function Profile() {
    return(
        <>
            <Header/>
            <main className="profile">
                <h2 className="profile__name">Привет, Виталий!</h2>
                <form className="profile__form">
                    <fieldset className="profile__fieldset">
                        <label className="profile__label">Имя</label>
                        <input 
                            className="profile__input" 
                            defaultValue="Виталий"
                            type="text"
                        />
                    </fieldset>
                    <fieldset className="profile__fieldset">
                        <label className="profile__label">E-mail</label>
                        <input 
                            className="profile__input" 
                            defaultValue="pochta@yandex.ru"
                            type="email"
                        />
                    </fieldset>
                    <button className="profile__btn profile__btn_type_edit" type="submit">Редактировать</button>
                    <button className="profile__btn profile__btn_type_logout" type="submit">Выйти из аккаунта</button>
                </form>
            </main>
        </>
    )
}

export default Profile;