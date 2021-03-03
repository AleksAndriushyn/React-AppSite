let initialState = {
    dialogs: [
        { id: 1, name: 'Rodik' },
        { id: 2, name: 'Zheka' },
        { id: 3, name: 'Andrey' }
    ],
    messages: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'What do you want?' },
        { id: 3, message: 'Bye' }
    ]
}

const DialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let message = action.newMessageText;

            return {
                ...state,
                messages: [...state.messages, {
                    id: 4,
                    message: message
                }]
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageText) => {
    return { type: 'SEND-MESSAGE', newMessageText };
}

export default DialogReducer;