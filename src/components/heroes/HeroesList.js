import React from 'react'
import { getHerosByPublisher } from '../../selectors/getHerosByPublisher'
import { HeroCard } from './HeroCard'

export const HeroesList = ({ publisher }) => {
    
    const heroes = getHerosByPublisher( publisher )

    return (
        <div className="card-columns">
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
