import React from 'react';
import { sendMessageActionCreator } from '../../Redux/DialogReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        dialogPage: state.DialogPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(sendMessageActionCreator(newMessageText))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);