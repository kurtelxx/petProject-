import React, {useContext} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "../MyPosts";
import MyContext from "../../../../MyContext";

const MyPostsContainer = (props) => {
    const store = useContext(MyContext);
        let state = store.getState()
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action)
                }
                return (<MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}/>)
        }

export default MyPostsContainer;