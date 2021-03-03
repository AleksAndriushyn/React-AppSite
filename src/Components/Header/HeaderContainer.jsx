import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../Redux/AuthReducer';
import Header from './Header';


class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    login: state.Auth.login
})
export default connect(mapStateToProps, { logoutUser })(HeaderContainer);