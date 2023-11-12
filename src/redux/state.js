import {rerenderEntireTree} from "../render";

let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11}
        ]
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
}
    export let addPost = (postMessage) => {
       let newPost = {
           id: 3,
           message: postMessage,
           likesCount: 0
       };
        state.profilePage.posts.push(newPost);
        rerenderEntireTree(state);
    }


export default state;