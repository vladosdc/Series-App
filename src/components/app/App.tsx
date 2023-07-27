import './app.scss'
import Main from "../main/Main.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowDetails from "../showDetails/ShowDetails.tsx";
import Search from "../search/Search.tsx";

const App = () => {
    return (
        <Router>
            <div className="app">
                <div className="app__container">
                    <div className="main__container">
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/showDetails/:name" element={<ShowDetails />} />
                            <Route path="/search" element={<Search/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default App;
