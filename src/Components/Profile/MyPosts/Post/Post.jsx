import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    console.log(props.message);
    return (
        <div className={s.item}>
            <img
                src='https://sun9-78.userapi.com/impg/eWc2hXGSNLAz_luOPMqgPY5t3UwKSJI-QWCnQA/L9WEUCn1iCY.jpg?size=1080x790&quality=96&sign=5d09cc771bd9f8b375105a943bf00597&type=album'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}
export default Post;