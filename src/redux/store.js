import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {

        profilePage: {
            posts: [{id: 1, message: 'Hi, how are you?', likesCount: 12}, {
                id: 2, message: 'It\'s my first post', likesCount: 11
            }], newPostText: 'sosat raki'
        },
        dialogsPage: {
            messages: [{id: 1, message: 'ДАРОВА '},
                {id: 2, message: 'Кулити'},
                {id: 3, message: 'А вот и я'}, {
                id: 4, message: 'Petya'
            }],
            dialogs: [{id: 1, name: 'Kirill'},
                {id: 2, name: 'Olya'},
                {id: 3, name: 'Sanya'},
                {id: 4, name: 'Petya'}],
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        debugger;
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;