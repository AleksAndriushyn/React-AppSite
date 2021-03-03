import React from "react";
import s from "./FormControls.module.css";
import {Field} from "redux-form";

const FormControl = ({input, meta:{touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            {hasError && error && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, child, ...restProps} = props;
    return (<FormControl {...props}><textarea {...input} {...restProps} /></FormControl>)
}

export const Input = (props) => {
    const {input, child, ...restProps} = props;
    return (<FormControl {...props}><input {...input} {...restProps} /></FormControl>)
}

export const createField = (placeholder, name, validator, component, props = {}, text = "") =>
    (
        <div>
            <Field placeholder={placeholder}
                   name={name}
                   validate={validator}
                   component={component}
                   {...props}/>{text}
        </div>

    )
