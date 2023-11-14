let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11}
            ],
            newPostText: 'sosat raki'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'ДАРОВА '},
                {id: 2, message: 'Кулити'},
                {id: 3, message: 'А вот и я'},
                {id: 4, message: 'Petya'}
            ],
            dialogs: [
                {id: 1, name: 'Kirill'},
                {id: 2, name: 'Olya'},
                {id: 3, name: 'Sanya'},
                {id: 4, name: 'Petya'}
            ]
        }
    },
    _callSubscriber() {
        console.log('state.changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // { type: 'ADD-POST' }
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}



window.store = store;
export default store;