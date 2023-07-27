import './header.scss'
import {Link} from "react-router-dom";
import home from "../../resources/home.png"
const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__title">
                <Link to={'/'} className="movie-app__text">Series App</Link>
                </div>
                <div className="header__nav">
                    <nav className="navigation">
                        <Link to={'/'} className="navigation__main">
                            <img src={home} alt="main page" className="main__page-img"/>
                            <p className="main__page-text">Main</p>
                        </Link>
                        <Link to={'/search'} className="navigation__main">Search</Link>
                    </nav>
                </div>
            </div>
            <div className="header__line"></div>
        </div>
    )
}

export default Header