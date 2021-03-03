import {profileAPI} from "../Components/Api/Api";

let initialState = {
    posts: [
        {id: 1, message: 'Hello', likesCounter: 125},
        {id: 2, message: 'Bye', likesCounter: 1020},
    ],
    profile: null,
    status: ''
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: action.newPostText,
                    likesCount: 0
                }],
            };
        }
        case 'DELETE-POST': {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            };
        }
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            };
        }
        case 'SET-STATUS': {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => {
    return {type: 'ADD-POST', newPostText};
}

export const deletePost = (postId) => {
    return {type: 'DELETE-POST', postId};
}

export const setUserProfile = (profile) => {
    return {type: 'SET-USER-PROFILE', profile};
}

export const setStatus = (status) => {
    return {type: 'SET-STATUS', status};
}

export const getProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);

    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);

    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default ProfileReducer;