import './main.scss'
import MainCards from "../mainCards/MainCards.tsx";
import Header from "../header/Header.tsx";

const Main = () => {
    return (
        <div className="main">
                <Header/>
            <p className="main__title">Recommended</p>
            <div className="main__cards-container">
            <MainCards/>
            </div>
        </div>
    )
}

export default Main
