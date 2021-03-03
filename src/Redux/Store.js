import ProfileReducer from "./ProfileReducer";
import DialogReducer from "./DialogReducer";
import SidebarReducer from "./SidebarReducer";

let store = {
    _state: {
        ProfilePage: {
            posts: [
                { id: 1, message: 'Hello', likesCounter: 125 },
                { id: 2, message: 'Bye', likesCounter: 1020 },
            ],
            newPostText: ''
        },
        DialogPage: {
            dialogs: [
                { id: 1, name: 'Rodik' },
                { id: 2, name: 'Zheka' },
                { id: 3, name: 'Andrey' }
            ],
            messages: [
                { id: 1, message: 'Hello' },
                { id: 2, message: 'What do you want?' },
                { id: 3, message: 'Bye' }
            ],
            newMessageText: ''
        },
        Sidebar: {
            friends: [
                { id: 1, name: 'Zheka' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Rodik' }
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.ProfilePage = ProfileReducer(this._state.ProfilePage, action);
        this._state.DialogPage = DialogReducer(this._state.DialogPage, action);
        this._state.Sidebar = SidebarReducer(this._state.Sidebar, action);
            
        this._callSubscriber(this._state);
    }
}

export default store;