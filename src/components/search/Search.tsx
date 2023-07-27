import {useEffect, useState} from "react";
import './search.scss'
import Header from "../header/Header.tsx";
import {useNavigate} from "react-router-dom";
import notFound from '../../resources/not-found.jpg'

const Search = () => {

    const navigate = useNavigate()

    const [searchRes, setSearchRes] = useState<any>('Breaking Bad')
    const [data, setData] = useState<any[]>([])
    const [showRes, setShowRes] = useState<any>('movies-series')

    const writeValue = (event: any) => {
        if (event.key === "Enter") {
            setSearchRes(event.target.value)
            event.target.value = ""
            event.target.blur()
        }
    }

    useEffect(() => {
        const apiUrl: string | number = `https://api.tvmaze.com/search/shows?q=${searchRes}`;

        const getRes = async () => {
            try {
                const res = await fetch(apiUrl)
                const resData = await res.json()
                setData(resData)
            } catch (error) {
                console.log(error)
                setShowRes('movies-series-hidden')
            }
        }

        getRes()
    }, [searchRes])


    useEffect(() => {

    }, [searchRes])

    return (
        <>
            <Header/>
            <div className="search">
                <div className="search__container">
                    <input type="text" placeholder="Search..." className="search__input" onKeyDown={writeValue}/>
                </div>
                <div className={showRes}>
                    <div className="main__cards">
                        <div className="main__cards-container">
                            {data.slice(0, 20).map(show => (
                                <div key={show.show.name} className="main__card" onClick={() => {
                                    navigate(`/showDetails/${show.show.name}`);
                                }}>
                                    <img
                                        src={show.show.image?.medium || notFound}
                                        alt={show.show.name}
                                        className="search-image-res"
                                    />
                                    <p className="main__card-title">{show.show.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search