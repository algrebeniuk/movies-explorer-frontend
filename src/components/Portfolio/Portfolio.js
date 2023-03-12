import '../Portfolio/Portfolio.css';
import linkArrow from '../../images/link-arrow.png';

function Portfolio() {
    return(
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__items">
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://github.com/algrebeniuk/how-to-learn" target="_blank" rel="noreferrer">
                        <p className="portfolio__link-text">Статичный сайт</p>
                        <img className="portfolio__link-img" src={linkArrow} alt="стрелочка"/>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://github.com/algrebeniuk/russian-travel" target="_blank" rel="noreferrer">
                        <p className="portfolio__link-text">Адаптивный сайт</p>
                        <img className="portfolio__link-img" src={linkArrow} alt="стрелочка"/>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://github.com/algrebeniuk/react-mesto-api-full" target="_blank" rel="noreferrer">
                        <p className="portfolio__link-text">Одностраничное приложение</p>
                        <img className="portfolio__link-img" src={linkArrow} alt="стрелочка"/>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;