import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    const { heroId } = useParams();

    //const hero = getHeroById(heroId);

    const hero = useMemo(() => getHeroById(heroId), [heroId]);
    
    const {
        id,
        superhero,
        alter_ego,
        first_appearance,
        publisher,
        characters
    } = hero;

    if (!hero) {
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        if (history.length <=2 ) {
            history.push('/');
        } else {
        history.goBack();
        }
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`../assets/heroes/${heroId}.jpg`}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    alt={superhero}
                />
            </div>
            <div className="col-4">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b> Alter Ego: </b> {alter_ego}</li>
                    <li className="list-group-item"><b> Publisher </b> {publisher}</li>
                    <li className="list-group-item"><b> First Appearance </b> {first_appearance}</li>
                </ul>
                <h5> Characters </h5>
                <p>{characters}</p>
                <button
                    onClick={ handleReturn }
                    className="btn btn-outline-info">
                    Return
                </button>
            </div>
            
        </div>
    )
}
