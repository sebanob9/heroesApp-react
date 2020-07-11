const { heroes } = require("../data/heroes");

export const getHeroById = ( id ) => {
    return heroes.find(hero => hero.id === id); // find nos devuelve el primero que encuentre que cumpla esa funcion
}
