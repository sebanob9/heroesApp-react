import React, { useMemo } from 'react'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../../selectors/getHerroesByName';

export const SearchScreen = ({history}) => {
    

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search) // string vacio para que no de undefined
    console.log(q)
    
    const [formvalues, handleInputChange] = useForm({
        searchText: q
    });

    const {searchText} = formvalues;

    const heroesFiltered=  useMemo(() => getHeroesByName(q), [q]) // useMemo para que no se lance la busqueda todo el tiempo y solo cuando hagamos el submit..
    // no funciona con el searchtext porque se lanza mientras vamos escribiendo, por eso lo relacionamos con el query(Q)     

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchText);
        history.push(`?q=${searchText}`);
    }

    //const heroesFiltered = getHeroesByName(searchText);

    return (
        <div>
            <h1>Search</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            value = { searchText }
                            onChange= { handleInputChange }
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>                    
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>

                    {   ( q === '')
                        &&
                        <div className="alert alert-info">
                        Search a hero
                        </div>
                    }
                    {   ( q !== '' && heroesFiltered.length < 1)
                        &&
                        <div className="alert alert-danger">
                            Hero {q} couldn't be found
                        </div>
                    }
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id} 
                                { ...hero } // mandamos todas las propiedades del heroe
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
