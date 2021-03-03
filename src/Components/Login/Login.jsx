import React from 'react';
import s from './Login.module.css';
import { connect } from 'react-redux';
import { loginUser } from './../../Redux/AuthReducer';
import LoginForm from './LoginForm';
import { Redirect } from 'react-router-dom';

const Login = (props) => {

    const onSubmit = (formData) => {
        props.loginUser(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1 className={s.header}>
                Login
            </h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth
})

export default connect(mapStateToProps, {loginUser})(Login);