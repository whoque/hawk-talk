import React from 'react';
import "./Login.css"
import { Button } from '@material-ui/core';
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then(result => 
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        ).catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat.Artwork/06844ea7261ca38c8acc0efa3d66d26026522358/Logos/icon.svg" alt="" />
                <div className="login__text">
                    <h1>Sign in to Chat</h1>
                </div>
                <Button type="submit" onClick={signIn}>
                    Sign in With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
