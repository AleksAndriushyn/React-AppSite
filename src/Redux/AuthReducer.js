import { authAPI } from "../Components/Api/Api";
import { stopSubmit } from "redux-form";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) => ({
     type: 'SET-USER-DATA', payload:
            { userId, email, login, isAuth }
})

export const getUserData = () => async (dispatch) => {
   let response = await authAPI.getMe();

    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const loginUser = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(getUserData());
    }
    else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
    }

}

export const logoutUser = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0)
        dispatch(setUserData(null, null, null, false));
}

export default AuthReducer;