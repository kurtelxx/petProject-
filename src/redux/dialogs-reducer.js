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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer