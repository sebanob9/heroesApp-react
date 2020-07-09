const { heroes } = require("../data/heroes");

export const getHerosByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if ( !validPublishers.includes( publisher ) ) {
        throw new Error(`Publisher ${ publisher} doesn't exist`)
    }

    return heroes.filter(hero => hero.publisher === publisher);
}