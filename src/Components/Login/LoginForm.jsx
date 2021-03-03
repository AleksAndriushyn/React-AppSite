import React from 'react';
import {reduxForm} from 'redux-form';
import {createField, Input} from '../common/FormControls/FormControls';
import {required} from '../../Utils/Validators/validators';
import s from './../common/FormControls/FormControls.module.css';

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "Remember me")}
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'login'
})(LoginForm);