const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    messages: [{id: 1, message: 'ДАРОВА '},
        {id: 2, message: 'Кулити'},
        {id: 3, message: 'А вот и я'}, {
            id: 4, message: 'Petya'
        }],
    dialogs: [{id: 1, name: 'Kirill'},
        {id: 2, name: 'Olya'},
        {id: 3, name: 'Sanya'},
        {id: 4, name: 'Petya'}
    ],
    newMessageText: ''
}

const dialogsReducer= (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 5, message: body})
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer