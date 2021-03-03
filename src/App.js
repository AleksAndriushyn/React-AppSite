import React from 'react';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar.jsx';
import UsersContainer from './Components/Users/UsersContainer ';
import {initializeApp} from './Redux/AppReducer';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import Preloader from './Components/common/Preloader/Preloader';
import Footer from './Components/Footer/Footer';
import store from './Redux/ReduxStore';
import { withSuspense } from './HOC/WithSuspense';

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
                    <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
                <div className='app-wrapper-footer'>
                    <Footer/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default MainApp;