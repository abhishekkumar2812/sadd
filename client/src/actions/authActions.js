import axios from 'axios';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SUBSCRIBE_SUCCESS,
    SUBSCRIBE_FAIL
} from "./types";

export const subscribe = ({username, email}) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({username, email});
    //console.log(body)
    axios.post('/api/users/subscribe', body, config)
    .then(res => {
        console.log(res)
        dispatch({
            type: SUBSCRIBE_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: SUBSCRIBE_FAIL,
        });
    });
}

export const register = ({name, email, password}) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({name, email, password});
    axios.post('/api/auth/signup', body, config) // by passig config as parameter we are trying to set contenttype as application json(check onenote)
    .then(res => {
            dispatch ({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        }
    )
    .catch(err => {
        dispatch({
            type: REGISTER_FAIL
        });
    });
};

export const login = ({email, password}) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({email, password});
    axios.post('/api/auth/signin', body, config) // by passig config as parameter we are trying to set contenttype as application json(check onenote)
    .then(res => {
            dispatch ({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        }
    )
    .catch(err => {
        dispatch({
            type: LOGIN_FAIL
        });
    });
}
/*export const tokenConfig = getState => {
    const token = getState().auth.token;
    //headers
    const config = {
        headers:{
            "Content-type": "application/json"
        }
    };
    //if token, add to headers
    if(token){
        config.headers['x-auth-token'] = token;
    }
    return config;
}*/