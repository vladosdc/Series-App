import {useState, useEffect} from 'react';
import './mainCards.scss';
import {useNavigate} from "react-router-dom";

interface Data {
    id: number | string,
    name: string,
    image: {
        medium: any
    }
}

const MainCards = () => {
    const navigate = useNavigate();
    const [comedyShows, setComedyShows] = useState<Data[]>([]);

    useEffect(() => {
        const apiUrl: string | number = 'https://api.tvmaze.com/shows?genres=comedy';

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setComedyShows(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="main__cards">
            <div className="main__cards-container">
                {comedyShows.slice(0, 20).map(show => (
                    <div key={show.id} className="main__card" onClick={() => {
                        navigate(`/showDetails/${show.name}`);
                    }}>
                        <img
                            src={show.image?.medium}
                            alt={show.name}
                            className="main__card-image"
                        />
                        <p className="main__card-title">{show.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainCards;
