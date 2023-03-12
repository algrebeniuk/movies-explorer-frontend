import './Promo.css';
import PromoImg from '../../images/promo-img.png';

function Promo() {
    return(
        <section className="promo">
            <div className="promo__info">
                <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <button className="promo__link">Узнать больше</button>
            </div>
            <img className="promo__img" alt="WEB" src={PromoImg}></img>
        </section>
    )
}

export default Promo;