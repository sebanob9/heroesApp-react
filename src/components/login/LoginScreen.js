import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

export const LoginScreen = ({history}) => {

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        dispatch({
            type: types.login,
            payload: {
                name: 'sebanob9'
            }
        })
        /* history.push('/'); */
        history.replace('/');
    }

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr />

            <button
                onClick={ () => handleLogin() }
                className="btn btn-primary">
                Login
            </button>
        </div>
    )
}
