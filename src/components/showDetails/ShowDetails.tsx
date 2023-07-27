import {useState, useEffect} from 'react';
import './showDetails.scss';
import Header from "../header/Header.tsx";
import {useParams} from "react-router-dom";
import './showDetails.scss'
import star from '../../resources/star.png'
import notFound from '../../resources/not-found.jpg'


const ShowDetails = () => {
    const [data, setData] = useState<any>('');
    const {name} = useParams();

    useEffect(() => {
        const apiUrl: string = `https://api.tvmaze.com/singlesearch/shows?q=${name}`;

        const getShowDetails = async () => {
            try {
                const res = await fetch(apiUrl);
                const details = await res.json();
                setData(details);
            } catch (error) {
                console.error(error);
            }
        }

        getShowDetails();
    }, [name]);


    return (
        <div className="show-details">
            <Header/>
            <div className="show-details__container">
                <div className="show-details-cards">
                    <div className="info-card">
                        <img className="info-card__image" src={data.image?.medium || notFound}
                             alt={`${data.name} poster`}/>
                        <div className="info-card__text-content">
                            <div className="info-card__name-rating-block">
                                <p className="info-card__name">{data.name}</p>
                                <p className="info-card__rating">{data.rating?.average ? `(${data.rating.average}/10)` : null}</p>
                                <img src={star} alt="star image"
                                     className={data.rating?.average ? "info-card__star-image" : "info-card__star-image-hidden"}/>
                            </div>
                            <p className="info-card__year-out">Year out: {data.premiered?.slice(0, 4)}</p>
                            <p className="info-card__genres">Genres: {data.genres?.[0]} {data.genres?.[1] ? `, ${data.genres[1]}` : ''} </p>
                            <p className="info-card__rating-mobile">{data.rating?.average ? `Rating: ${data.rating.average}/10` : null}</p>
                            <p
                                className="info-card__description"
                                dangerouslySetInnerHTML={{__html: `Description: ${data.summary}`}}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ShowDetails;
