import { getUserData } from "./AuthReducer";

let initialState = {
    initialized: false
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-INITIALIZED':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const isInitialized = () => ({ type: 'SET-INITIALIZED' })

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getUserData());

    Promise.all([promise]).then(() => {
            dispatch(isInitialized());
        });
}

export default AppReducer;