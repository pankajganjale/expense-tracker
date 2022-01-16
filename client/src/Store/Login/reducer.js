import { LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_ERROR } from "./actionTypes";

const initState = {
    loginLoading: false,
    loginData: [],
    loginError: false
}

export const loginReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOGIN_LOADING:
            return {
                ...state,
                loginLoading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginLoading: false,
                loginData: [...state.loginData, payload]
            }
        case LOGIN_ERROR:
            return {
                ...state,
                loginLoading: false,
                loginError: payload
            }
        default:
            return state
    }
}