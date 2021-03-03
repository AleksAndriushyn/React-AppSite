import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import AddMessageForm from './MessageForm/AddMessageForm';

const Dialogs = (props) => {

    let state = props.dialogPage;

    let DialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let MessageElements = state.messages.map(m => <Message message={m.message} />);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {DialogElements}
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    {MessageElements}
                </div>
                <AddMessageForm onSubmit={addNewMessage} />
            </div>
        </div>
    );
}

export default Dialogs;