import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwDsQHhnxB6CE5KsiVJXF28ONLgdEy9t0ZBg&usqp=CAU' />
            {props.message}
            <div>
                <span>likes: </span>{props.likesCounter}
            </div>
        </div>
    );
}

export default Post;