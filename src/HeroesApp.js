import React, { useReducer, useEffect } from 'react'
import { AppRouter } from './routers/AppRouter'
import { authReducer } from './components/auth/authReducer'
import { AuthContext } from './components/auth/AuthContext';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false } // init comprueba si existe el objeto user. si existe, lo devuelve.. sino devuelve un objeto con el logged en false. 
    // esto se ejecuta en el init, se pasa al initialState, y por tanto pasa a ser el estado inicial de la aplicacion
}

const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect( () => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]); 

    return (
        <AuthContext.Provider value={{user, dispatch}}>
            <AppRouter />
        </AuthContext.Provider>
    )
}

export default HeroesApp
