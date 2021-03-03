import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from "redux-thunk";
import AppReducer from "./AppReducer";
import AuthReducer from "./AuthReducer";
import DialogReducer from "./DialogReducer";
import ProfileReducer from "./ProfileReducer";
import SidebarReducer from "./SidebarReducer";
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogPage: DialogReducer,
    Sidebar: SidebarReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer,
    form: formReducer,
    app: AppReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;