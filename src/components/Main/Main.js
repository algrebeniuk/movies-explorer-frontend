import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Promo from "../Promo/Promo";
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';

function Main() {
    return(
        <>
            <Header/> 
            <Promo/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
            <Footer/>
        </>
    )
}

export default Main;