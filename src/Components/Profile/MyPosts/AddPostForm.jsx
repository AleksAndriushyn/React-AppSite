import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from './../../../Utils/Validators/validators'
import { Textarea } from '../../common/FormControls/FormControls';

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field validate={[required, maxLength10]} component={Textarea} name={"newPostText"} placeholder='Type for new post' />
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'addPost'
})(AddPostForm);