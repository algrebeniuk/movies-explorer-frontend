import '../AboutMe/AboutMe.css';
import myPhoto from '../../images/my-photo.png';

function AboutMe() {
    return(
        <section className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__container">
                <div className="about-me__container-info">
                    <div className="about-me__info">
                        <h3 className="about-me__name">Виталий</h3>
                        <h4 className="about-me__description">Фронтенд-разработчик, 30 лет</h4>
                        <p className="about-me__bio">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    </div>
                    <a className="about-me__link" href="https://github.com/algrebeniuk" target="_blank" rel="noreferrer">Github</a>
                </div>
                <img src={myPhoto} alt="Фото" className="about-me__photo"/>
            </div>
        </section>
    )
}

export default AboutMe;