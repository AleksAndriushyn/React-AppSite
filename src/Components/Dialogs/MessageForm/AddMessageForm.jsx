import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from './../../common/FormControls/FormControls';
import { required, maxLengthCreator } from './../../../Utils/Validators/validators';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field component={Textarea} validate={[required, maxLength50]} name={"newMessageText"} placeholder='Enter your message' />
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'addMessage'
})(AddMessageForm);
