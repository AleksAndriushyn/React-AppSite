import React from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../../Redux/AuthReducer';


class LoginContainer extends React.Component {
    componentDidMount() {
        this.props.getUserData();
        this.props.loginUser();
    }
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    login: state.Auth.login
})

export default connect(mapStateToProps, { getUserData })(LoginContainer);