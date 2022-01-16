import { LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_ERROR } from "./actionTypes";

export const loginSuccess = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data
});

export const loginLoading = () => ({
    type: LOGIN_LOADING
});

export const loginError = (error) => ({
    type: LOGIN_ERROR,
    payload: error
});