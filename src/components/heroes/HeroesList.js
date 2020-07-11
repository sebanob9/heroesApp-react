import React, { useMemo } from 'react'
import { getHerosByPublisher } from '../../selectors/getHerosByPublisher'
import { HeroCard } from './HeroCard'

export const HeroesList = ({ publisher }) => {
    
    //const heroes = getHerosByPublisher( publisher )

    const heroes = useMemo(() => getHerosByPublisher( publisher ), [publisher]);

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            { heroes.map( hero => (
                <HeroCard
                    key={ hero.id }
                    { ...hero}
                />

                ))
            }
        </div>
    )
}
